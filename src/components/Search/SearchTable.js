import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'antd';
import moment from 'moment';

import './SearchTable.css';
import { selectorSearch } from '../../reducers/search';
import { selectorGenres } from '../../reducers/genres';

const sort = (itemA, itemB) => {
  if (itemA > itemB) return 1;
  if (itemA < itemB) return -1;
  return 0;
};

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

  getColumns = () => {
    const { genresNames } = this.props;
    const columns = [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        className: 'SearchTableTitle',
        sorter: (a, b) => sort(a.title, b.title),
        width: 450,
      },
      {
        title: 'Vote average',
        dataIndex: 'vote_average',
        key: 'vote_average',
        className: 'SearchTableVoteAverage',
        sorter: (a, b) => sort(a.vote_average, b.vote_average),
        width: 150,
        align: 'center',
      },
      {
        title: 'Vote count',
        dataIndex: 'vote_count',
        key: 'vote_count',
        className: 'SearchTableVoteCount',
        sorter: (a, b) => sort(a.vote_count, b.vote_count),
        width: 150,
        align: 'center',
      },
      {
        title: 'Popularity',
        dataIndex: 'popularity',
        key: 'popularity',
        className: 'SearchTablePopularity',
        sorter: (a, b) => sort(a.popularity, b.popularity),
        width: 150,
        align: 'center',
      },
      {
        title: 'Release date',
        dataIndex: 'release_date',
        key: 'release_date',
        className: 'SearchTableReleaseDate',
        render: text => moment(text).format('DD/MM/YYYY'),
        sorter: (a, b) => sort(a.release_date, b.release_date),
        width: 150,
        align: 'center',
      },
      {
        title: 'Genres',
        dataIndex: 'genre_ids',
        key: 'genre_ids',
        render: ids =>
          ids
            .reduce((genresAsString, idGenre) => {
              return genresNames && genresNames[idGenre]
                ? `${genresAsString} ${genresNames[idGenre]},`
                : '';
            }, '')
            .slice(0, -1),
        className: 'SearchTableGenres',
      },
    ];
    return columns;
  };

  render() {
    const { isLoadingMovies, movies, isLoadingGenres } = this.props;
    const columns = this.getColumns();
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
