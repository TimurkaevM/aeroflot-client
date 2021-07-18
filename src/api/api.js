import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-aeroflot.herokuapp.com/aeroflot/',
});
