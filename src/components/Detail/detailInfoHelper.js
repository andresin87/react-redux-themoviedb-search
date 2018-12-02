import React from 'react';

import DetailInfoItem from './DetailInfoItem';
import DetailInfoHeader from './DetailInfoHeader';

export const getDataSource = props => {
  const {
    detail: {
      movie: {
        budget,
        genres,
        overview,
        popularity,
        production_companies,
        production_countries,
        release_date,
        runtime,
        spoken_languages,
        status,
        vote_average,
        vote_count,
      },
    },
  } = props;

  const dataSource = [
    {
      key: 'genres',
      label: 'Genres',
      type: 'array',
      value: genres,
    },
    {
      key: 'overview',
      label: 'Overview',
      type: 'text',
      value: overview,
    },
    {
      key: 'status',
      label: 'Status',
      type: 'text',
      value: status,
    },
    {
      key: 'release_date',
      label: 'Release date',
      type: 'date',
      value: release_date,
    },
    {
      key: 'runtime',
      label: 'Runtime',
      type: 'time',
      value: runtime,
    },
    {
      key: 'spoken_languages',
      label: 'Spoken languages',
      type: 'array',
      value: spoken_languages,
    },
    {
      key: 'budget',
      label: 'Budget',
      type: 'currency',
      value: budget,
    },
    {
      key: 'production_companies',
      label: 'Prod. companies',
      type: 'array',
      value: production_companies,
    },
    {
      key: 'production_countries',
      label: 'Prod. countries',
      type: 'array',
      value: production_countries,
    },
    {
      key: 'popularity',
      label: 'Popularity',
      type: 'number',
      value: popularity,
    },
    {
      key: 'vote_average',
      label: 'Vote average',
      type: 'number',
      value: vote_average,
    },
    {
      key: 'vote_count',
      label: 'Vote count',
      type: 'number',
      value: vote_count,
    },
  ];

  return dataSource;
};

export const getDetailInfoHeader = (title, tagline) => (
  <DetailInfoHeader title={title} tagline={tagline} />
);

export const getDetailInfoItem = item => (
  <DetailInfoItem>{item}</DetailInfoItem>
);
