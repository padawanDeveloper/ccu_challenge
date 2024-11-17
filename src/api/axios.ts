import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {'content-type': 'application/x-www-form-urlencoded'},
});

const get = (url: string) => api.get(url);
const post = (url: string, payload: any) => api.post(url, payload);

export {get, post};
