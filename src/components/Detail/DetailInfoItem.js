import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

class DetailInfoItem extends PureComponent {
  getNamesOfArray = array => {
    return array
      .reduce((namesOfArray, item) => {
        return item.name ? `${namesOfArray} ${item.name},` : '';
      }, '')
      .slice(0, -1);
  };

  getDateWithDDMMYYYFormat = date => {
    var pattern = /(\d{4})-(\d{2})-(\d{2})/;
    if (!date || !date.match(pattern)) {
      return null;
    }
    return date.replace(pattern, '$3/$2/$1');
  };

  getItemContent = item => {
    const { type, value } = item;

    switch (type) {
      case 'array':
        return `${value && value.length ? this.getNamesOfArray(value) : ''}`;
      case 'currency':
        return `${value ? value.toLocaleString() : ''}$`;
      case 'date':
        return `${value ? this.getDateWithDDMMYYYFormat(value) : ''}`;
      case 'number':
        return `${value ? value.toLocaleString() : ''}`;
      case 'time':
        return `${value ? value + ' min.' : ''}`;
      case 'text':
      default:
        return `${value ? value : ''}`;
    }
  };

  render() {
    const { children } = this.props;
    const { label, value } = children;
    if (!value || value === '') return null;
    return (
      <List.Item>
        <strong style={{ whiteSpace: 'nowrap', minWidth: '140px' }}>
          {label}
          :&nbsp;
        </strong>
        {this.getItemContent(children)}
      </List.Item>
    );
  }
}

DetailInfoItem.propTypes = {
  key: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'currency',
    'array',
    'text',
    'number',
    'date',
    'time',
  ]),
  value: PropTypes.string,
};

export default DetailInfoItem;
