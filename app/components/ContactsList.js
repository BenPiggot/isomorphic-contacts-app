import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const filteredContacts = this.props.contacts.filter((contact) => {
      contact.name.indexOf(this.props.filterText) !== -1;
    });

    return <ul>
      { filteredContacts.map((contact) => {
        <li key={contact.email}>{contact.name} - {contact.email}</li>
      })}
    </ul>
  }
}

export default ContactList;