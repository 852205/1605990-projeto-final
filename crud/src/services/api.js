import axios from 'axios';

// URL da nossa API
const baseUrl = 'http://localhost:3030';

const api = axios.create({
baseURL
});

export default api;