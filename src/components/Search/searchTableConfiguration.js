import moment from 'moment';

const sort = (itemA, itemB) => {
  if (itemA > itemB) return 1;
  if (itemA < itemB) return -1;
  return 0;
};

const renderDate = text => moment(text).format('DD/MM/YYYY');
const renderGenders = (ids, genresNames) =>
  ids
    .reduce((genresAsString, idGenre) => {
      return genresNames && genresNames[idGenre]
        ? `${genresAsString} ${genresNames[idGenre]},`
        : '';
    }, '')
    .substring(1)
    .slice(0, -1);

const sortByPopularity = (a, b) => sort(a.popularity, b.popularity);
const sortByReleaseDate = (a, b) => sort(a.release_date, b.release_date);
const sortByTitle = (a, b) => sort(a.title, b.title);
const sortByVoteAverage = (a, b) => sort(a.vote_average, b.vote_average);
const sortByVoteCount = (a, b) => sort(a.vote_count, b.vote_count);

export const getColumns = genresNames => {
  return [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      className: 'SearchTableTitle',
      sorter: sortByTitle,
      width: 450,
    },
    {
      title: 'Vote average',
      dataIndex: 'vote_average',
      key: 'vote_average',
      className: 'SearchTableVoteAverage',
      sorter: sortByVoteAverage,
      width: 150,
      align: 'center',
    },
    {
      title: 'Vote count',
      dataIndex: 'vote_count',
      key: 'vote_count',
      className: 'SearchTableVoteCount',
      sorter: sortByVoteCount,
      width: 150,
      align: 'center',
    },
    {
      title: 'Popularity',
      dataIndex: 'popularity',
      key: 'popularity',
      className: 'SearchTablePopularity',
      sorter: sortByPopularity,
      width: 150,
      align: 'center',
    },
    {
      title: 'Release date',
      dataIndex: 'release_date',
      key: 'release_date',
      className: 'SearchTableReleaseDate',
      render: renderDate,
      sorter: sortByReleaseDate,
      width: 150,
      align: 'center',
    },
    {
      title: 'Genres',
      dataIndex: 'genre_ids',
      key: 'genre_ids',
      render: ids => renderGenders(ids, genresNames),
      className: 'SearchTableGenres',
    },
  ];
};
