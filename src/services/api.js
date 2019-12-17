/* eslint-disable import/no-cycle */
import axios from 'axios'
import { REACT_APP_API_URL } from 'react-native-dotenv'

import { store } from '../store'

const api = axios.create({
  baseURL: REACT_APP_API_URL
})

api.interceptors.request.use(config => {
  const { token } = store.getState().auth
  const headers = { ...config.headers }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  return { ...config, headers }
})

export default api
