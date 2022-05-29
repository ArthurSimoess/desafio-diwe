/* eslint-disable dot-notation */
import axios from 'axios';

// user@diwe.com.br
// Mob20we23##

const api = axios.create({
  baseURL: 'https://contacts-api.prd.parceirodaconstrucao.com.br',
});

export const auth = async (login) => {
  try {
    const result = await api.post('/auth/login', login);
    return result.data;
  } catch (error) {
    console.error(error.response.data.errors);
    return 'error';
  }
};

export const getContact = async (token) => {
  try {
    const result = await api.get(
      '/contacts',
      { headers: { Authorization: `Bearer ${token}` } },
    );
    return result;
  } catch (error) {
    console.error(error);
    return error.response.data.errors;
  }
};

export const getContactById = async (id, token) => {
  try {
    const result = await api.get(
      `/contacts/${id}`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    return result;
  } catch (error) {
    console.error(error);
    return 'error';
  }
};

export const createContact = async (newContact, token) => {
  try {
    await api.post(
      '/contacts',
      newContact,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    console.log('Criado com sucesso');
  } catch (error) {
    console.error(error);
  }
};

export const updateContact = async (id, contact, token) => {
  try {
    await api.put(
      `contacts/${id}`,
      contact,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    console.log(id, 'Atualizado com sucesso');
  } catch (error) {
    console.error(error);
  }
};

export const removeContact = async (id, token) => {
  try {
    await api.delete(
      `/contacts/${id}`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    console.log(id, 'Deletado com sucesso');
  } catch (error) {
    console.error(error);
  }
};
