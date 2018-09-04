import React from 'react';

import { connect } from '../react-redux';

import FilterableList from '../components/FilterableList';

import { changeSearchTerm } from '../actions';

class AwesomeList extends React.Component {
  state = {
    data: []
  };

  componentDidMount () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      })
  }

  handleSearchTermChange = searchTerm => {
    this.props.changeSearchTerm(searchTerm);
  }

  render () {
    return (
      <FilterableList
        list={ this.state.data }
        searchTerm={ this.props.searchTerm }
        onSearchTermChange={ this.handleSearchTermChange }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  };
};

const actions = {
  changeSearchTerm
};

export default connect(mapStateToProps, actions)(AwesomeList);
