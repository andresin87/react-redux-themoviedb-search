import { getItemContent } from '../detailInfoItemHelper';

describe('DetailInfoItem helper', () => {
  describe('Array', () => {
    it(`Array is null`, () => {
      const item = {
        key: 'production_companies',
        label: 'Prod. companies',
        type: 'array',
        value: null,
      };
      expect(getItemContent(item)).toEqual('');
    });

    it(`Array is empty`, () => {
      const item = {
        key: 'production_companies',
        label: 'Prod. companies',
        type: 'array',
        value: [],
      };
      expect(getItemContent(item)).toMatchSnapshot();
    });

    it(`Array has empty items`, () => {
      const item = {
        key: 'production_companies',
        label: 'Prod. companies',
        type: 'array',
        value: [
          {
            id: 711,
            logo_path: '/tEiIH5QesdheJmDAqQwvtN60727.png',
            name: null,
            origin_country: 'US',
          },
          {
            id: 20555,
            logo_path: null,
            name: 'Taurus Film',
            origin_country: '',
          },
        ],
      };
      expect(getItemContent(item)).toMatchSnapshot();
    });
  });

  describe('Currency', () => {
    it(`Currency is null`, () => {
      const item = {
        key: 'budget',
        label: 'Budget',
        type: 'currency',
        value: null,
      };
      expect(getItemContent(item)).toEqual('');
    });
  });

  describe('Date', () => {
    it(`Date is null`, () => {
      const item = {
        key: 'release_date',
        label: 'Release date',
        type: 'date',
        value: null,
      };
      expect(getItemContent(item)).toEqual('');
    });

    it(`Date has wrong pattern`, () => {
      const item = {
        key: 'release_date',
        label: 'Release date',
        type: 'date',
        value: '199-10-15',
      };
      expect(getItemContent(item)).toMatchSnapshot(`Item ${item.key}`);
    });
  });

  describe('Number', () => {
    it(`Number is null`, () => {
      const item = {
        key: 'popularity',
        label: 'Popularity',
        type: 'number',
        value: null,
      };
      expect(getItemContent(item)).toEqual('');
    });
  });

  describe('Time', () => {
    it(`Time is null`, () => {
      const item = {
        key: 'runtime',
        label: 'Runtime',
        type: 'time',
        value: null,
      };
      expect(getItemContent(item)).toEqual('');
    });
  });

  describe('Text', () => {
    it(`Text is null`, () => {
      const item = {
        key: 'overview',
        label: 'Overview',
        type: 'text',
        value: null,
      };
      expect(getItemContent(item)).toEqual('');
    });
  });
});
