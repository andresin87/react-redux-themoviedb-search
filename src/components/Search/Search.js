import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import { fetchPopular, fetchSearch, fetchGenres } from '../../actions';

class Search extends PureComponent {
	componentDidMount() {
		const { fetchPopular, fetchGenres } = this.props;
		fetchPopular();
		fetchGenres();
	}
	render() {
		const { search } = this.props;
		return (
			<Fragment>
				<SearchBar />
				<pre style={{ textAlign: 'left' }}>
					{JSON.stringify(search, null, 2)}
				</pre>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	const { search } = state;
	return { search };
};

export default connect(
	mapStateToProps,
	{ fetchPopular, fetchSearch, fetchGenres }
)(Search);
