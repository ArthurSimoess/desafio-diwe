import React, { useState } from 'react';
import loginSvg from '../../assets/images/login.svg';
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

  return (
    <div className="login-container">
      <section className="image-section">
        <img src={loginSvg} alt="" />
      </section>
      <section className="forms-section">
        <form onSubmit={() => {}}>
          <label htmlFor="email">
            <p>Email</p>
            <input
              type="email"
              name="email"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              type="password"
              name="password"
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
    </div>
  );
}

export default LoginPage;
