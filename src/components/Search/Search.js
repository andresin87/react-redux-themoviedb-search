import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchPopular, fetchSearch } from '../../actions';

class Search extends PureComponent {
	componentDidMount() {
		const { fetchPopular } = this.props;
		fetchPopular();
	}
	render() {
		const { search } = this.props;
		return (
			<pre style={{ textAlign: 'left' }}>{JSON.stringify(search, null, 2)}</pre>
		);
	}
}

const mapStateToProps = state => {
	const { search } = state;
	return { search };
};

export default connect(
	mapStateToProps,
	{ fetchPopular, fetchSearch }
)(Search);
