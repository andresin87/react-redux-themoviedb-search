import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectorDetail } from '../../reducers';

class DetailPoster extends PureComponent {
  render() {
    const {
      detail: {
        movie: { title, poster_path },
      },
    } = this.props;
    if (!poster_path) return null;
    return (
      <img
        alt={title}
        style={{ width: 500 }}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      />
    );
  }
}

DetailPoster.propTypes = {
  detail: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return { detail: selectorDetail(state) };
};

export default connect(mapStateToProps)(DetailPoster);
