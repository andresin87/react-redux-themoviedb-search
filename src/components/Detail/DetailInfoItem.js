import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

import { getItemContent } from './detailInfoItemHelper';

class DetailInfoItem extends PureComponent {
  render() {
    const { children } = this.props;
    const { label } = children;
    return (
      <List.Item>
        <strong style={{ whiteSpace: 'nowrap', minWidth: '140px' }}>
          {label}
          :&nbsp;
        </strong>
        {getItemContent(children)}
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
