import axios from 'axios';
import { AppConfig } from '../config';

export const getProducts = async () => {
  const response = await axios.get(`${AppConfig.backendBaseURL}/api/products`);
  return response.data;
};
