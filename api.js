import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000',
});

export const getAllProducts = () => API.get('/products');
export const searchProducts = (query) => API.get(`/products/search?query=${query}`);
export const storeChatLog = (sessionId, content) => API.post('/chat/store', { session_id: sessionId, content });
