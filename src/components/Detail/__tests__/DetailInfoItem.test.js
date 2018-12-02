import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import DetailInfoItem from '../DetailInfoItem';

const dataSource = [
  {
    key: 'budget',
    label: 'Budget',
    type: 'currency',
    value: 63000000,
  },
  {
    key: 'genres',
    label: 'Genres',
    type: 'array',
    value: [
      {
        id: 18,
        name: 'Drama',
      },
    ],
  },
  {
    key: 'overview',
    label: 'Overview',
    type: 'text',
    value:
      'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
  },
  {
    key: 'popularity',
    label: 'Popularity',
    type: 'number',
    value: 38.513,
  },
  {
    key: 'production_companies',
    label: 'Prod. companies',
    type: 'array',
    value: [
      {
        id: 508,
        logo_path: '/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png',
        name: 'Regency Enterprises',
        origin_country: 'US',
      },
      {
        id: 711,
        logo_path: '/tEiIH5QesdheJmDAqQwvtN60727.png',
        name: 'Fox 2000 Pictures',
        origin_country: 'US',
      },
      {
        id: 20555,
        logo_path: null,
        name: 'Taurus Film',
        origin_country: '',
      },
      {
        id: 54051,
        logo_path: null,
        name: 'Atman Entertainment',
        origin_country: '',
      },
      {
        id: 54052,
        logo_path: null,
        name: 'Knickerbocker Films',
        origin_country: '',
      },
      {
        id: 25,
        logo_path: '/qZCc1lty5FzX30aOCVRBLzaVmcp.png',
        name: '20th Century Fox',
        origin_country: 'US',
      },
      {
        id: 4700,
        logo_path: '/A32wmjrs9Psf4zw0uaixF0GXfxq.png',
        name: 'The Linson Company',
        origin_country: '',
      },
    ],
  },
  {
    key: 'production_countries',
    label: 'Prod. countries',
    type: 'array',
    value: [
      {
        iso_3166_1: 'DE',
        name: 'Germany',
      },
      {
        iso_3166_1: 'US',
        name: 'United States of America',
      },
    ],
  },
  {
    key: 'release_date',
    label: 'Release date',
    type: 'date',
    value: '1999-10-15',
  },
  {
    key: 'runtime',
    label: 'Runtime',
    type: 'time',
    value: 139,
  },
  {
    key: 'spoken_languages',
    label: 'Spoken languages',
    type: 'array',
    value: [
      {
        iso_639_1: 'en',
        name: 'English',
      },
    ],
  },
  {
    key: 'status',
    label: 'Status',
    type: 'text',
    value: 'Released',
  },
  {
    key: 'vote_average',
    label: 'Vote average',
    type: 'number',
    value: 8.4,
  },
  {
    key: 'vote_count',
    label: 'Vote count',
    type: 'number',
    value: 13653,
  },
];

describe('DetailInfoItem component', () => {
  dataSource.forEach(item => {
    describe(`Processing ${item.key}`, () => {
      const component = <DetailInfoItem>{item}</DetailInfoItem>;

      it(`Renders ${item.key}`, () => {
        const div = document.createElement('div');
        ReactDOM.render(component, div);
        ReactDOM.unmountComponentAtNode(div);
      });

      it(`Snapshot ${item.key}`, () => {
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot(`Item ${item.key}`);
      });
    });
  });
});
