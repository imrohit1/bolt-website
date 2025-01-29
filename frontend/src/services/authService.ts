import axios from 'axios';
import { AppConfig } from '../config';

export const loginUser = async (email: string, password: string) => {
  return await axios.post(`${AppConfig.backendBaseURL}/api/login`, { email, password });
};
