import React, { PureComponent, Fragment } from 'react';

class DetailInfoHeader extends PureComponent {
  getTagline = tagline => {
    if (!tagline || tagline === '') return null;
    else {
      return (
        <h4 style={{ marginLeft: '10px', fontStyle: 'oblique' }}>
          {' '}
          — {tagline}
        </h4>
      );
    }
  };

  render() {
    const { title, tagline } = this.props;
    return (
      <Fragment>
        <h2>
          <strong>{title}</strong>
        </h2>
        {this.getTagline(tagline)}
      </Fragment>
    );
  }
}

export default DetailInfoHeader;
