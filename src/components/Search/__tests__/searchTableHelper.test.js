import { getColumns } from '../searchTableHelper';

describe('SearchTable configuration', () => {
  const genresNames = {
    12: 'Adventure',
    14: 'Fantasy',
    16: 'Animation',
  };
  const searchTableConfiguration = getColumns(genresNames);
  const searchByKey = key =>
    searchTableConfiguration.filter(item => item.key === key)[0];

  it('Snapshot matchs', () => {
    expect(searchTableConfiguration).toMatchSnapshot();
  });

  describe('Sorters', () => {
    it('sortByTitle', () => {
      const key = 'title';
      const { sorter } = searchByKey(key);
      const itemA = { [key]: 'A' };
      const itemB = { [key]: 'B' };
      expect(sorter(itemA, itemB)).toEqual(-1);
      expect(sorter(itemA, itemA)).toEqual(0);
      expect(sorter(itemB, itemA)).toEqual(1);
    });

    it('sortByVoteAverage', () => {
      const key = 'vote_average';
      const { sorter } = searchByKey(key);
      const itemA = { [key]: 123 };
      const itemB = { [key]: 456 };
      expect(sorter(itemA, itemB)).toEqual(-1);
      expect(sorter(itemA, itemA)).toEqual(0);
      expect(sorter(itemB, itemA)).toEqual(1);
    });

    it('sortByVoteCount', () => {
      const key = 'vote_count';
      const { sorter } = searchByKey(key);
      const itemA = { [key]: 123 };
      const itemB = { [key]: 456 };
      expect(sorter(itemA, itemB)).toEqual(-1);
      expect(sorter(itemA, itemA)).toEqual(0);
      expect(sorter(itemB, itemA)).toEqual(1);
    });

    it('sortByPopularity', () => {
      const key = 'popularity';
      const { sorter } = searchByKey(key);
      const itemA = { [key]: 123 };
      const itemB = { [key]: 456 };
      expect(sorter(itemA, itemB)).toEqual(-1);
      expect(sorter(itemA, itemA)).toEqual(0);
      expect(sorter(itemB, itemA)).toEqual(1);
    });

    it('sortByReleaseDate', () => {
      const key = 'release_date';
      const { sorter } = searchByKey(key);
      const itemA = { [key]: '2018-01-02' };
      const itemB = { [key]: '2018-01-03' };
      expect(sorter(itemA, itemB)).toEqual(-1);
      expect(sorter(itemA, itemA)).toEqual(0);
      expect(sorter(itemB, itemA)).toEqual(1);
    });
  });

  describe('Renders', () => {
    it('renderDate', () => {
      const key = 'release_date';
      const { render } = searchByKey(key);
      expect(render('2018-01-03')).toEqual('03/01/2018');
    });

    describe('renderGenders', () => {
      it('Regular case', () => {
        const key = 'genre_ids';
        const { render } = searchByKey(key);
        const idAnimationGender = 16;
        const idAdventureGender = 12;
        expect(render([idAnimationGender, idAdventureGender])).toEqual(
          'Animation, Adventure'
        );
      });

      it('No gender found', () => {
        const key = 'genre_ids';
        const { render } = searchByKey(key);
        const idNonExistentGender = 99;
        expect(render([idNonExistentGender])).toEqual('');
      });
    });
  });
});
