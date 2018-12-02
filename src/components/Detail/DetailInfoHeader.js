import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './DetailInfoHeader.css';

const getTagline = tagline => {
  if (!tagline || tagline === '') return null;
  else {
    return <h4 className="DetailInfoHeaderTagline"> — {tagline}</h4>;
  }
};

class DetailInfoHeader extends PureComponent {
  render() {
    const { title, tagline } = this.props;
    return (
      <div className="DetailInfoHeader">
        <h2>
          <strong>{title}</strong>
        </h2>
        {getTagline(tagline)}
      </div>
    );
  }
}

DetailInfoHeader.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
};

export default DetailInfoHeader;
