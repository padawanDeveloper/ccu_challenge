import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
  baseURL: BASE_URL,
});

const get = (url: string) => api.get(url);
const post = (url: string, payload: any) => api.get(url, payload);

export {get, post};
