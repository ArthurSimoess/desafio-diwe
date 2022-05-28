import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginSvg from '../../assets/images/login.svg';
import { auth } from '../../service/api';
import './loginStyle.scss';

function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  function handleChange({ target }) {
    const { name, value } = target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await auth(loginInfo);
    localStorage.setItem('token', result.token);
    navigate('/contactList');
  }

  return (
    <main className="login-container">
      <figure className="figure">
        <img src={loginSvg} alt="homem branco sentando em um escritório mexendo no computador" />
      </figure>
      <section className="forms-section">
        <div className="welcome-container">
          <h1>Bem-vindo!</h1>
          <p>Faça login para acessar nossa plataforma</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <p>Email</p>
            <input
              type="email"
              name="email"
              required
              placeholder="Digite seu email"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            <p>Senha</p>
            <input
              type="password"
              name="password"
              required
              placeholder="Digite sua senha"
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
          >
            Fazer login
          </button>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
