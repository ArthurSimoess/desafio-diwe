/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import './removeModalStyle.scss';

function RemoveModal({ name }) {
  return (
    <div className="modal-container">
      <div className="modal-card">
        <h1>
          {`Tem certeza que deseja excluir ${name} dos seus contatos`}
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

RemoveModal.propTypes = {
  name: PropTypes.string.isRequired,
};

export default RemoveModal;
