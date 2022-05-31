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
  const [errorMsg, setErrorMsg] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

  function handleChange({ target }) {
    const { name, value } = target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setDisableBtn(true);
    const { data } = await auth(loginInfo);
    setDisableBtn(false);
    if (!data) {
      setErrorMsg(true);
    } else {
      localStorage.setItem('token', data.token);
      navigate('/contactList');
    }
  }

  return (
    <main className="login-container">
      <figure className="figure">
        <img src={loginSvg} alt="homem branco sentando em um escritório mexendo no computador" />
      </figure>
      <section className="forms-section">
        <div className="welcome-container">
          <h1>Bem-vindo(a)!</h1>
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
          <div className="login-btn-container">
            <button
              type="submit"
              disabled={disableBtn}
            >
              Fazer login
            </button>
            {
              errorMsg
                && (
                <p className="error-msg">
                  E-mail ou senha incorretos
                </p>
                )
            }
          </div>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
