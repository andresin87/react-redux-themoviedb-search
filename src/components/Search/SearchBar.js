import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from 'antd';

import './SearchBar.css';
import { fetchSearch } from '../../actions';

const Search = Input.Search;

class SearchBar extends PureComponent {
  render() {
    const { fetchSearch } = this.props;
    return (
      <div className="SearchBar">
        <Search
          placeholder="Search for a film..."
          enterButton="Search"
          size="large"
          onSearch={value => fetchSearch(value)}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  fetchSearch: PropTypes.func.isRequired,
};

export default connect(
  null,
  { fetchSearch }
)(SearchBar);
