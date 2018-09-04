import React from 'react';

import FilterableList from '../components/FilterableList';

class AwesomeList extends React.Component {
  state = {
    data: [],
    searchTerm: ''
  };

  componentDidMount () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      })
  }

  handleSearchTermChange = searchTerm => {
    this.setState({ searchTerm });
  }

  render () {
    return (
      <FilterableList
        list={ this.state.data }
        searchTerm={ this.state.searchTerm }
        onSearchTermChange={ this.handleSearchTermChange }
      />
    );
  }
}

export default AwesomeList;
