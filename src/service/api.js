import axios from 'axios';

const api = axios.create({
  baseURL: 'https://contacts-api.prd.parceirodaconstrucao.com.br',
});

// Configuração para enviar o token no header de todas as requisições.
api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

// user@diwe.com.br
// Mob20we23##

export const auth = async (login) => {
  try {
    const result = await api.post('/auth/login', login);
    return result.data;
  } catch (error) {
    console.error(error.response.data.errors);
    return 'error';
  }
};

export const getContact = async () => {
  try {
    const result = await api.get('/contacts');
    return result;
  } catch (error) {
    console.error(error);
    return error.response.data.errors;
  }
};
