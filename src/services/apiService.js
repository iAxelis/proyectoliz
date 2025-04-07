import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const apiService = {
    getRecords: async () => {
        try {
            const response = await axios.get(`${API_URL}/records`);
            const data = response.data;

            return Array.isArray(data) ? data : [data];
        } catch (err) {
            console.log('Error al obtener datos: ', err);
            throw err;
        }
    },

    login: async (username, password) => {
        try {
            const response = await axios.post(`${API_URL}/login`, {
                username,
                password
            });
            return response.data;
        } catch (err) {
            console.error('Error al iniciar Sesion: ', err);
            throw err;
        }
    }
}

export default apiService;  