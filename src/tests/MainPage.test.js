/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
import MainPage from '../pages/mainPage/MainPage';

jest.mock('axios');

const data = [
  {
    id: 3,
    name: 'Ciclano Fake',
    mobile: '11232123123',
    email: 'ciclanofake1@gmail',
  }, {
    id: 2,
    name: 'Fulano Fake',
    mobile: '91232123123',
    email: 'fulanofake1@gmail',
  },
  {
    id: 1,
    name: 'Algúem Fake',
    mobile: '31232123123',
    email: 'alguemfake1@gmail',
  }];

describe('Testa página principal que lista os contatos', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data });
  });
  it('Testa se ao clicar em voltar o usuário é redirecionado para loginPage', () => {
    const { history } = renderWithRouter(<MainPage />);
    history.push('/contactList');
    const backBtn = screen.getByRole('link', { name: /seta apontando para o lado esquerdo voltar/i });
    expect(backBtn).toBeInTheDocument();

    userEvent.click(backBtn);

    expect(history.location.pathname).toBe('/');
  });

  it('Testa se a lista de contatos é carregada corretamente na página', async () => {
    act(() => {
      renderWithRouter(<MainPage />);
    });

    const contactFakeName1 = await screen.findByRole('cell', {
      name: /Ciclano Fake/i,
    });
    const contactFakeEmail2 = await screen.findByRole('cell', {
      name: /fulanofake1@gmail/i,
    });
    const contactFakeMobile3 = await screen.findByRole('cell', {
      name: /31232123123/i,
    });

    expect(contactFakeName1).toBeInTheDocument();
    expect(contactFakeEmail2).toBeInTheDocument();
    expect(contactFakeMobile3).toBeInTheDocument();
  });
});
