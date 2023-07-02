import { client } from '../utils/fetchClient';

export const getCurrencies = () => {
  return client.get('');
};
