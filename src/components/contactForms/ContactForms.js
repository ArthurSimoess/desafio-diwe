/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import './contactFormsStyle.scss';

function ContactForms({
  contact, handleChange, handleSubmit,
}) {
  return (
    <div className="create-forms-container">
      <form onSubmit={handleSubmit}>
        <div className="create-title-forms">
          <h1>Cadastre um novo contato</h1>
          <p>Preencha as informações para cadastrar um novo contato</p>
        </div>
        <div className="create-inputs-container">
          <label htmlFor="name">
            <p>Nome Completo</p>
            <input
              name="name"
              type="text"
              required
              value={contact.name}
              placeholder="Digite o nome do contato"
              onChange={handleChange}
            />
          </label>
          <div className="email-mobile-inputs">
            <label htmlFor="email">
              <p>Email</p>
              <input
                name="email"
                type="email"
                required
                placeholder="Digite seu email"
                value={contact.email}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="mobile">
              <p>Celular</p>
              <input
                name="mobile"
                type="number"
                required
                placeholder="Digite o celular"
                value={contact.mobile}
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
  );
}

ContactForms.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    mobile: PropTypes.string,
  }).isRequired,
};

export default ContactForms;
