import { handleResponse, handleError } from './apiUtils';
import { API_ACCESS_TOKEN, API_URL, BASE_URL } from '../config/constants';
import axios from 'axios';

export async function authenticateUser(user) {
  return axios
    .post(
      `${BASE_URL}${API_URL.AUTH}?access_token=${API_ACCESS_TOKEN}`,
      {},
      { auth: { username: user.username, password: user.password } }
    )
    .then(handleResponse)
    .catch(handleError);
}
