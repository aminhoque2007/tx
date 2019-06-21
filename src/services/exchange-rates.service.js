import axios from 'axios';

const BASE_URL = 'https://api.exchangeratesapi.io';
export const getFxRates = (currency, date) => {
  if (date && currency) {
    return axios.get(`${BASE_URL}/${date}?base=${currency}`);
  }
  return axios.get(`${BASE_URL}/latest`);
};
