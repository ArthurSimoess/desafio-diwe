// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React from 'react';
import arrowDown from '../../assets/images/chevron-down.svg';
import './btnTableStyle.scss';

function ButtonTable({ title }) {
  return (
    <button
      type="button"
      handleClick={() => { }}
      className="table-btn"
    >
      <p>{title}</p>
      <img src={arrowDown} alt="Seta apontando para baixo" />
    </button>
  );
}

ButtonTable.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ButtonTable;