/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import ContactForms from '../../components/contactForms/ContactForms';
import Header from '../../components/header/Header';
import './createStyle.scss';

function CreateContact() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  function handleChange({ target }) {
    const { name, value } = target;
    setContact({
      ...contact,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const toSave = {
      ...contact,
      mobile: String(contact.mobile),
    };
    console.log(toSave);
  }

  return (
    <main className="main-create">
      <Header path="/contactList" />
      <ContactForms
        contact={contact}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

export default CreateContact;
