// src/api/axios.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://your-backend-api-url.com/api', // Replace with your actual backend URL
});

// Request interceptor to add the auth token to headers
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default apiClient;