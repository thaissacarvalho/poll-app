import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:3003/api/v1/pollapp'
});