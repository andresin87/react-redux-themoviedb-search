import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchSearchById } from '../../actions';

class Detail extends PureComponent {
  componentDidMount() {
    const { fetchSearchById, location } = this.props;
    if (location && location.pathname) {
      const id = location.pathname.replace('/detail/', '');
      if (id) fetchSearchById(id);
    }
  }
  render() {
    const { detail } = this.props;
    return (
      <pre style={{ textAlign: 'left' }}>{JSON.stringify(detail, null, 2)}</pre>
    );
  }
}

const mapStateToProps = state => {
  const { detail } = state;
  return { detail };
};

export default connect(
  mapStateToProps,
  { fetchSearchById }
)(Detail);
