import axios from 'axios';
// import { REACT_APP_API_URL } from 'react-native-dotenv';

const api = axios.create({
  baseURL: 'https://caio-delivery-api.herokuapp.com',
});

export default api;
