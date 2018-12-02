import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'antd';

import DetailInfoHomeButton from './DetailInfoHomeButton';
import { selectorDetail } from '../../reducers';
import {
  getDataSource,
  getDetailInfoHeader,
  getDetailInfoItem,
} from './detailInfoHelper';

class DetailInfo extends PureComponent {
  render() {
    const {
      detail: {
        movie: { tagline, title },
      },
    } = this.props;
    const dataSource = getDataSource(this.props);

    return (
      <Fragment>
        <DetailInfoHomeButton />
        <List
          header={getDetailInfoHeader(title, tagline)}
          size="medium"
          dataSource={dataSource}
          renderItem={getDetailInfoItem}
        />
      </Fragment>
    );
  }
}

DetailInfo.propTypes = {
  detail: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return { detail: selectorDetail(state) };
};

export default connect(mapStateToProps)(DetailInfo);
