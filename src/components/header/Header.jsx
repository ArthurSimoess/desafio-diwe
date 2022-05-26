import React from 'react';
import { Link } from 'react-router-dom';
import arrowLeft from '../../assets/images/arrow-left.svg';
import './headerStyle.scss';

function Header() {
  return (
    <header>
      <Link to="/" className="link">
        <img src={arrowLeft} alt="Seta apontando para o lado esquerdo" />
        <p>Voltar</p>
      </Link>
    </header>
  );
}

export default Header;
