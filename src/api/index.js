import axios from 'axios';

const api = axios.create({
  //baseURL: process.env.API_URL,
  baseURL: 'https://pie.now.sh',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
