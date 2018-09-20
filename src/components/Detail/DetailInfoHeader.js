import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

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

DetailInfoHeader.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
};

export default DetailInfoHeader;
