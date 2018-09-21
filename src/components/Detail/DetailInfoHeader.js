import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './DetailInfoHeader.css';

class DetailInfoHeader extends PureComponent {
  getTagline = tagline => {
    if (!tagline || tagline === '') return null;
    else {
      return <h4 className="DetailInfoHeaderTagline"> — {tagline}</h4>;
    }
  };

  render() {
    const { title, tagline } = this.props;
    return (
      <div className="DetailInfoHeader">
        <h2>
          <strong>{title}</strong>
        </h2>
        {this.getTagline(tagline)}
      </div>
    );
  }
}

DetailInfoHeader.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
};

export default DetailInfoHeader;
