/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import './contactFormsStyle.scss';

function ContactForms({
  contact, handleChange, handleSubmit, text, disabled,
}) {
  return (
    <div className="create-forms-container">
      <form onSubmit={handleSubmit}>
        <div className="create-title-forms">
          <h1>{text.title}</h1>
          <p>{text.paragraph}</p>
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
          disabled={disabled}
        >
          {text.btn}
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
  text: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    btn: PropTypes.string,
  }).isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default ContactForms;
