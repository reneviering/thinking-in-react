import React from 'react';

import List from './List';
import SearchBar from './SearchBar';

class FilterableList extends React.Component {
  state = {
    searchTerm: ''
  };

  handleSearchTermChange = searchTerm => {
    this.setState({ searchTerm });
  }

  render () {
    const filteredList = this.props.list.filter(listItem => listItem.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));

    return (
      <React.Fragment>
        <SearchBar
          searchTerm={ this.state.searchTerm }
          onSearchTermChange={ this.handleSearchTermChange }
        />
        <p>
          { filteredList.length } / { this.props.list.length }
        </p>
        <List list={ filteredList } />
      </React.Fragment>
    );

  }
}

export default FilterableList;
