import React, { useState } from 'react';
import loginSvg from '../../assets/images/login.svg';
import { auth } from '../../service/api';
import './loginStyle.scss';

function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  function handleChange({ target }) {
    const { name, value } = target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(loginInfo);
    const result = await auth(loginInfo);
    console.log(result);
  }

  return (
    <main className="login-container">
      <figure className="figure">
        <img src={loginSvg} alt="" />
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
              placeholder="Digite seu email"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            <p>Senha</p>
            <input
              type="password"
              name="password"
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
