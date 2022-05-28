import React from 'react';
import './removeModalStyle.scss';

function RemoveModal() {
  return (
    <div className="modal-container">
      <div className="modal-card">
        <h1>
          Tem certeza que deseja excluir este contato?
        </h1>
        <p>
          Após excluir, não será possível recuperar o contato.
        </p>
        <div>
          <button
            type="button"
          >
            Excluir contato
          </button>
          <button
            type="button"
          >
            Não excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default RemoveModal;
