/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
import LoginPage from '../pages/login/LoginPage';

jest.mock('axios');

const data = {
  token: 'tokenMockado',
};

describe('Testa a página de login', () => {
  beforeEach(() => {
    axios.post.mockResolvedValue({ data });
  });

  it('Testa se os elementos imagem e título estão na tela', () => {
    renderWithRouter(<LoginPage />);

    const loginImage = screen.getByRole('img', { name: /homem branco sentando em um escritório mexendo no computador/i });
    const welcomeTitle = screen.getByRole('heading', { name: /bem-vindo/i });
    expect(loginImage).toBeInTheDocument();
    expect(welcomeTitle).toBeInTheDocument();
  });

  it('Testa os inputs de login email/senha e o botão de login', async () => {
    const { history } = renderWithRouter(<LoginPage />);
    const inputEmail = screen.getByPlaceholderText(/Digite seu email/i);
    const inputPassword = screen.getByPlaceholderText(/digite sua senha/i);
    const loginBtn = screen.getByRole('button', { name: /fazer login/i });

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();

    userEvent.type(inputEmail, 'emailteste@gmail.com');
    userEvent.type(inputPassword, 'senhaTeste123');

    expect(inputEmail).toHaveValue('emailteste@gmail.com');
    expect(inputPassword).toHaveValue('senhaTeste123');

    await act(async () => {
      userEvent.click(loginBtn);
    });

    const storageToken = localStorage.getItem('token');

    expect(storageToken).toBe('tokenMockado');
    expect(history.location.pathname).toBe('/contactList');
  });
});
