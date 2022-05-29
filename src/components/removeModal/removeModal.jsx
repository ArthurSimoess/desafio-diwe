/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import { removeContact } from '../../service/api';
import getToken from '../../service/localStorage';
import './removeModalStyle.scss';

function RemoveModal({ change, setChange }) {
  const {
    modal, setModal, setMessage,
  } = useContext(MyContext);

  function closeModal() {
    setModal({
      open: false,
      name: 'usuario',
      id: '',
    });
  }

  async function excludeContact() {
    const token = getToken();
    const { id } = modal;
    await removeContact(id, token);
    setMessage({
      show: true,
      name: modal.name,
      action: 'removido',
    });
    setModal({
      open: false,
      name: 'usuario',
      id: '',
    });
    setChange(!change);
  }

  return (
    <div className="modal-container">
      <div className="modal-card">
        <h1>
          Tem certeza que deseja excluir
          {' '}
          <span className="username-remove">{modal.name}</span>
          {' '}
          dos seus contatos?
        </h1>
        <p>
          Após excluir, não será possível recuperar o contato.
        </p>
        <div>
          <button
            type="button"
            onClick={excludeContact}
          >
            Excluir contato
          </button>
          <button
            type="button"
            onClick={closeModal}
          >
            Não excluir
          </button>
        </div>
      </div>
    </div>
  );
}

RemoveModal.propTypes = {
  change: PropTypes.bool.isRequired,
  setChange: PropTypes.func.isRequired,
};

export default RemoveModal;
