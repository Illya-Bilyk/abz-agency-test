import axios from 'axios';

axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1';

export const getUsers = async count => {
  const response = await axios
    .get(`/users?page=1&count=${count}`)
    .then(res => res);
  return response.data;
};
