/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import check from '../../assets/images/check-circle.svg';
import trash from '../../assets/images/trash.svg';
import './successMessage.scss';

function SuccessMessage({ name, action }) {
  const icon = action === 'removido' ? trash : check;
  const imgAlt = action === 'removido' ? 'Icone de um x em vermelho' : 'Icone de um check em verde';
  const style = action === 'removido' ? 'deleted-message' : 'created-message';

  return (
    <div className={style}>
      <div>
        <img
          src={icon}
          alt={imgAlt}
        />
        <p>
          O Contato
          {' '}
          {name}
          {' '}
          foi
          {' '}
          {action}
          {' '}
          com sucesso!
        </p>
      </div>
    </div>
  );
}

SuccessMessage.propTypes = {
  action: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SuccessMessage;
