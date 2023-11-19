import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import {
  Container,
  SearchInput,
  TitleH1,
  TitleH2,
  TitleH3,
} from './Gobal.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name.toLowerCase() === name.toLowerCase()) {
        alert(`"${name}"is already in contacts`);
        return;
      }
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  handleFilterChange = event => {
    this.setState({ filter: event.target.value.toLowerCase() });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleSubmit = (name, number) => {
    this.addContact(name, number);
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Container>
        <TitleH1>PhoneBook</TitleH1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <TitleH2>Contacts</TitleH2>
        <TitleH3>Find contacts by name</TitleH3>
        <SearchInput
          type="text"
          name="filter"
          placeholder="Search"
          value={filter}
          onChange={this.handleFilterChange}
        />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
