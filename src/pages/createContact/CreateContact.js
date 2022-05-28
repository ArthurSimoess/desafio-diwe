/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import ContactForms from '../../components/contactForms/ContactForms';
import Header from '../../components/header/Header';
import { createContact } from '../../service/api';
import './createStyle.scss';

function CreateContact() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const textObj = {
    title: 'Cadastre um novo contato',
    paragraph: 'Preencha as informações para cadastrar um novo contato',
    btn: 'Cadastrar Contato',
  };

  function handleChange({ target }) {
    const { name, value } = target;
    setContact({
      ...contact,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const toSave = {
      ...contact,
      mobile: String(contact.mobile),
    };
    await createContact(toSave);
  }

  return (
    <main className="main-create">
      <Header path="/contactList" />
      <ContactForms
        contact={contact}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        text={textObj}
      />
    </main>
  );
}

export default CreateContact;
