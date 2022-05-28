/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import arrowLeft from '../../assets/images/arrow-left.svg';
import './headerStyle.scss';

function Header({ path }) {
  return (
    <header>
      <Link to={path} className="link">
        <img src={arrowLeft} alt="Seta apontando para o lado esquerdo" />
        <p>Voltar</p>
      </Link>
    </header>
  );
}

Header.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Header;
