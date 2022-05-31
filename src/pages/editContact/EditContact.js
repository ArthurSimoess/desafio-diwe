/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContactForms from '../../components/contactForms/ContactForms';
import Header from '../../components/header/Header';
import { getContactById, updateContact } from '../../service/api';
import './editContactStyle.scss';
import MyContext from '../../context/MyContext';
import getToken from '../../service/localStorage';

function EditContact() {
  const [editContact, setEditContact] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const { id } = useParams();
  const { setMessage } = useContext(MyContext);
  const navigate = useNavigate();

  const textObj = {
    title: 'Atualizar contato',
    paragraph: 'Faça as alterações necessárias e ao terminar salve seu contato',
    btn: 'Salvar alterações',
  };

  useEffect(() => {
    (async () => {
      const token = getToken();
      const { data } = await getContactById(id, token);
      if (!data) return;
      setEditContact(data);
    })();
  }, []);

  function handleChange({ target }) {
    const { name, value } = target;
    setEditContact({
      ...editContact,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const token = getToken();
    const toUpdate = {
      ...editContact,
      mobile: String(editContact.mobile),
    };
    await updateContact(id, toUpdate, token);
    setMessage({
      show: true,
      name: editContact.name,
      action: 'editado',
    });
    navigate('/contactList');
  }

  return (
    <main className="main-edit">
      <Header path="/contactList" />
      <ContactForms
        contact={editContact}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        text={textObj}
      />
    </main>
  );
}

export default EditContact;
