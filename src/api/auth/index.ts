import {post} from '../axios';

type params = {
  username: string;
  password: string;
};

const login = (params: params) => post('/auth/login', params);

const auth = {
  login,
};

export default auth;
