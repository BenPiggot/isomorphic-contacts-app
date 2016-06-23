import React, { Component } from 'react';
import ContactList from './ContactList.js';
import SearchBar from './SearchBar.js';

class ContactsApp extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      contacts: this.props.initialData || [],
      filterText: ''
    }
  }

  handleUserInput(searchTerm) {
    this.setState({ filterText: searchTerm })
  }

  render() {
    return <div>
      <SearchBar filterText={this.state.filterText}
                 onUserInput={this.handleUserInput.bind(this)} />
      <ContactList contacts={this.state.contacts}
                   filterText={this.state.filterText} />
    </div>
  }
};

export default ContactsApp;

