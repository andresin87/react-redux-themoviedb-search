import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import SearchTable from './SearchTable';
import { selectorSearch } from '../../reducers/search';
import { selectorGenres } from '../../reducers/genres';
import { fetchPopular, fetchGenres } from '../../actions';

class Search extends PureComponent {
  componentDidMount() {
    const {
      isLoadingMovies,
      movies,
      isLoadingGenres,
      genresNames,
    } = this.props;
    const { fetchPopular, fetchGenres } = this.props;
    if (!isLoadingMovies && movies.length === 0) fetchPopular();
    if (!isLoadingGenres && Object.keys(genresNames).length === 0)
      fetchGenres();
  }
  render() {
    return (
      <Fragment>
        <SearchBar />
        <SearchTable />
      </Fragment>
    );
  }
}

Search.propTypes = {
  movies: PropTypes.array.isRequired,
  isLoadingMovies: PropTypes.bool.isRequired,
  genresNames: PropTypes.object.isRequired,
  isLoadingGenres: PropTypes.bool.isRequired,
  fetchPopular: PropTypes.func.isRequired,
  fetchGenres: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { movies, isLoading: isLoadingMovies } = selectorSearch(state);
  const { names: genresNames, isLoading: isLoadingGenres } = selectorGenres(
    state
  );
  return {
    movies,
    isLoadingMovies,
    genresNames,
    isLoadingGenres,
  };
};

export default connect(
  mapStateToProps,
  { fetchPopular, fetchGenres }
)(Search);
