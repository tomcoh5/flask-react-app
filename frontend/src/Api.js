// src/Api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000/api', // Replace with your Flask backend URL
});

export const fetchData = async () => {
  try {
    const response = await api.get('/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
