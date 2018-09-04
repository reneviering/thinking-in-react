import React from 'react';

import FilterableList from '../components/FilterableList';

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

  render () {
    return <FilterableList list={ this.state.data } />;
  }
}

export default AwesomeList;
