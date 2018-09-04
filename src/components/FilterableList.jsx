import React from 'react';

import List from './List';
import SearchBar from './SearchBar';

class FilterableList extends React.Component {
  render () {
    const filteredList = this.props.list.filter(listItem => listItem.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()));

    return (
      <React.Fragment>
        <SearchBar
          searchTerm={ this.props.searchTerm }
          onSearchTermChange={ this.props.onSearchTermChange }
        />
        <p>
          { filteredList.length } / { this.props.list.length }
        </p>
        <List list={ filteredList } />
      </React.Fragment>
    );

  }
}

FilterableList.defaultProps = {
  searchTerm: ''
};

export default FilterableList;
