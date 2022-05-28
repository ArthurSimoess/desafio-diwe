/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';

function SuccessMessage({ name, action }) {
  return (
    <div>
      <p>
        O Contato
        {' '}
        {name}
        {' '}
        foi
        {' '}
        {action}
        {' '}
        com sucesso!!!
      </p>
    </div>
  );
}

SuccessMessage.propTypes = {
  action: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SuccessMessage;
