import axios from 'axios';

const api = axios.create({
  baseURL: 'https://contacts-api.prd.parceirodaconstrucao.com.br',
});

// user@diwe.com.br
// password

export const auth = async (login) => {
  try {
    const result = await api.post('/auth/login', login);
    return result.data;
  } catch (error) {
    console.error(error);
    return 'error';
  }
};

export const getContatct = async () => {
  const result = await api.get('/contacts');
  return result.data;
};
