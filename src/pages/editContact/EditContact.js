/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import ContactForms from '../../components/contactForms/ContactForms';
import Header from '../../components/header/Header';
import './editContactStyle.scss';

function EditContact() {
  const [editContact, setEditContact] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  function handleChange({ target }) {
    const { name, value } = target;
    setEditContact({
      ...editContact,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const toUpdate = {
      ...editContact,
      mobile: String(editContact.mobile),
    };
    console.log(toUpdate);
  }

  return (
    <main className="main-create">
      <Header path="/contactList" />
      <ContactForms
        contact={editContact}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

export default EditContact;
