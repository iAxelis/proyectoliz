import axios from 'axios';

const API_URL = 'http://localhost:3001/api/records/';

const apiService = {
    getRecords: async () => {
        try {
            const response = await axios.get(`${API_URL}`);
            const data = response.data;

            return Array.isArray(data) ? data : [data];
        } catch (err) {
            console.log('Error al obtener datos: ', err);
            throw err;
        }
    }
}

export default apiService;  