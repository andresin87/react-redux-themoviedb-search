import React, { PureComponent, Fragment } from 'react';

class DetailInfoHeader extends PureComponent {
  render() {
    const { title, tagline } = this.props;
    return (
      <Fragment>
        <h2>
          <strong>{title}</strong>
        </h2>
        <h4 style={{ marginLeft: '10px', fontStyle: 'oblique' }}>
          {' '}
          — {tagline}
        </h4>
      </Fragment>
    );
  }
}

export default DetailInfoHeader;
