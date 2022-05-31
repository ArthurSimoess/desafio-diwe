/* eslint-disable react/jsx-no-bind */
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForms from '../../components/contactForms/ContactForms';
import Header from '../../components/header/Header';
import MyContext from '../../context/MyContext';
import { createContact } from '../../service/api';
import getToken from '../../service/localStorage';
import './createStyle.scss';

function CreateContact() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [disableBtn, setDisableBtn] = useState(false);
  const { setMessage } = useContext(MyContext);
  const navigate = useNavigate();

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
    const token = getToken();
    const toSave = {
      ...contact,
      mobile: String(contact.mobile),
    };
    setDisableBtn(true);
    await createContact(toSave, token);
    setDisableBtn(false);
    setMessage({
      show: true,
      name: contact.name,
      action: 'adicionado',
    });
    navigate('/contactList');
  }

  return (
    <main className="main-create">
      <Header path="/contactList" />
      <ContactForms
        contact={contact}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        text={textObj}
        disabled={disableBtn}
      />
    </main>
  );
}

export default CreateContact;
