import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import { removeContact } from '../../service/api';
import './removeModalStyle.scss';

function RemoveModal() {
  const { modal, setModal } = useContext(MyContext);

  function closeModal() {
    setModal({
      open: false,
      name: 'usuario',
      id: '',
    });
  }

  async function excludeContact() {
    const { id } = modal;
    await removeContact(id);
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

export default RemoveModal;
