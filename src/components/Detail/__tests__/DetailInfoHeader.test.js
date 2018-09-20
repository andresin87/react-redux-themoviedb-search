import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import DetailInfoHeader from '../DetailInfoHeader';

describe('DetailInfoHeader component', () => {
  const title = 'Fight Club';
  const tagline = 'Mischief. Mayhem. Soap.';
  const component = <DetailInfoHeader title={title} tagline={tagline} />;

  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Snapshot matchs', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Snapshot tagline', () => {
    it('No tagline', () => {
      const component = <DetailInfoHeader title={title} />;
      const tree = renderer.create(component).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Tagline is null', () => {
      const component = <DetailInfoHeader title={title} tagline={null} />;
      const tree = renderer.create(component).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Tagline is empty string', () => {
      const component = <DetailInfoHeader title={title} tagline={''} />;
      const tree = renderer.create(component).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
