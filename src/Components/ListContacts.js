import React, {Component} from 'react';
import PropTypes from 'prop-types'

class ListContacts extends Component {

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ""
  }

  updateQuery = (query)  => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  render() {

    const contacts = this.props.contacts.map(contact => (
      <li key={contact.id} className='contact-list-item'>
        <div className='contact-avatar' style={{backgroundImage: `url(${contact.avatarURL})`}}></div>
        <div className='contact-details'>
          <p>{contact.name}</p>
          <p>@{contact.handle}</p>
        </div>
        <button className='contact-remove'
        onClick={() => this.props.onDeleteContact(contact)}>
          Remove
        </button>
      </li>
    ));

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className='search-contacts'
            type="text"
            placeholder="Search Contacts"
            value = {this.state.query}
            onChange = {(event) => this.updateQuery(event.target.value)}
          />
        </div>
        <ol className="contacts-list">
          {contacts}
        </ol>
      </div>
    )
  }
}

export default ListContacts;
