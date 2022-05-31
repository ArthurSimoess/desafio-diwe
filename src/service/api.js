/* eslint-disable dot-notation */
import axios from 'axios';

// user@diwe.com.br
// Mob20we23##

export const auth = async (login) => {
  try {
    const result = await axios.post('https://contacts-api.prd.parceirodaconstrucao.com.br/auth/login', login);
    return result;
  } catch (error) {
    console.error(error.response.data.errors);
    return 'error';
  }
};

export const getContact = async (token) => {
  try {
    const result = await axios.get(
      'https://contacts-api.prd.parceirodaconstrucao.com.br/contacts',
      { headers: { Authorization: `Bearer ${token}` } },
    );
    return result;
  } catch (error) {
    console.error(error);
    return 'Error';
  }
};

export const getContactById = async (id, token) => {
  try {
    const result = await axios.get(
      `https://contacts-api.prd.parceirodaconstrucao.com.br/contacts/${id}`,
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
    await axios.post(
      'https://contacts-api.prd.parceirodaconstrucao.com.br/contacts',
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
    await axios.put(
      `https://contacts-api.prd.parceirodaconstrucao.com.br/contacts/${id}`,
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
    await axios.delete(
      `https://contacts-api.prd.parceirodaconstrucao.com.br/contacts/${id}`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    console.log(id, 'Deletado com sucesso');
  } catch (error) {
    console.error(error);
  }
};
