import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import SearchTable from './SearchTable';
import { fetchPopular, fetchGenres } from '../../actions';

class Search extends PureComponent {
  componentDidMount() {
    const { fetchPopular, fetchGenres } = this.props;
    fetchPopular();
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

export default connect(
  null,
  { fetchPopular, fetchGenres }
)(Search);
