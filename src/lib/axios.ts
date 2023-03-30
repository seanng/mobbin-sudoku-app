'server-only';

import axios from 'axios';

export const request = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'x-api-key': process.env.API_KEY,
  },
});
