import {get} from '../axios';

const getProducts = () => get('/products');

const products = {
  getProducts,
};

export default products;
