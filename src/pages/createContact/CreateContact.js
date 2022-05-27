import React, { useState } from 'react';
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

  return (
    <main className="main-create">
      <Header path="/contactList" />
      <div className="create-forms-container">
        <form>
          <div className="create-title-forms">
            <h1>Cadastre um novo contato</h1>
            <p>Preencha as informações para cadastrar um novo contato</p>
          </div>
          <div className="create-inputs-container">
            <label htmlFor="name">
              <p>Nome Completo</p>
              <input
                name="name"
                required
                placeholder="Digite o nome do contato"
                onChange={handleChange}
              />
            </label>
            <div className="email-mobile-inputs">
              <label htmlFor="email">
                <p>Email</p>
                <input
                  name="email"
                  required
                  placeholder="Digite seu email"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="mobile">
                <p>Celular</p>
                <input
                  name="mobile"
                  required
                  placeholder="Digite o celular"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <button
            type="submit"
          >
            Cadastrar Contato
          </button>
        </form>
      </div>
    </main>
  );
}

export default CreateContact;
