import { selectorDetail, selectorGenres, selectorSearch } from '../index';

describe('Selectors', () => {
  it('selectorDetail', () => {
    const detail = { a: 1, b: 2 };
    const state = {
      detail,
    };
    expect(selectorDetail(state)).toEqual(detail);
  });

  it('selectorGenres', () => {
    const genres = { a: 1, b: 2 };
    const state = {
      genres,
    };
    expect(selectorGenres(state)).toEqual(genres);
  });

  it('Selector: selectorSearch', () => {
    const search = { a: 1, b: 2 };
    const state = {
      search,
    };
    expect(selectorSearch(state)).toEqual(search);
  });
});
