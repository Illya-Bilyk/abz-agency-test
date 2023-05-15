import axios from 'axios';

axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1';

export const getUsers = async count => {
  const response = await axios
    .get(`/users?page=1&count=${count}`)
    .then(res => res);
  return response.data;
};

export const getId = async () => {
  const response = await axios.get(`/positions`).then(res => res);
  return response.data.positions;
};

const getToken = async () => {
  const response = await axios.get('/token');
  return response.data.token;
};

export const postUser = async user => {
  const token = await getToken();
  const config = {
    headers: { Token: `${token}` },
  };

  const formData = new FormData();
  formData.append('position_id', user.position_id);
  formData.append('name', user.name);
  formData.append('email', user.email);
  formData.append('phone', user.phone);
  formData.append('photo', user.photo);

  const response = await axios.post('/users', formData, config);
  return response;
};
