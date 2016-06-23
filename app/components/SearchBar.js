import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange(event) {
    this.props.onUserInput(event.target.value)
  }

  render() {
    return <input type='search'
                  placeholder='search'
                  value={this.props.filterText}
                  onChange={this.handleChange.bind(this)} />
  } 
}

export default SearchBar;