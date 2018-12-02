import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'antd';

import './SearchTable.css';
import { getColumns } from './searchTableHelper';
import { selectorSearch } from '../../reducers';
import { selectorGenres } from '../../reducers';

class SearchTable extends PureComponent {
  static contextTypes = {
    router: PropTypes.object,
  };

  goToDetail(id, dataSource) {
    this.context.router.history.push({
      pathname: `/detail/${id}`,
      state: { dataSource },
    });
  }

  render() {
    const {
      isLoadingMovies,
      movies,
      isLoadingGenres,
      genresNames,
    } = this.props;

    const columns = getColumns(genresNames);

    return (
      <div className="SearchTable">
        <Table
          loading={isLoadingMovies || isLoadingGenres}
          dataSource={movies}
          columns={columns}
          pagination={{ pageSize: 10 }}
          onRow={record => {
            return {
              onClick: () => this.goToDetail(record.id, movies),
            };
          }}
          rowKey={record => record.id}
        />
      </div>
    );
  }
}

SearchTable.propTypes = {
  movies: PropTypes.array.isRequired,
  isLoadingMovies: PropTypes.bool.isRequired,
  genresNames: PropTypes.object.isRequired,
  isLoadingGenres: PropTypes.bool.isRequired,
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

export default connect(mapStateToProps)(SearchTable);
