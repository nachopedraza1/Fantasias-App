import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnv';


const { VITE_API_URL } = getEnvVariables();


const fantApi = axios.create({
    baseURL: VITE_API_URL,
})

fantApi.interceptors.request.use((config) => {
    config.headers['x-token'] = localStorage.getItem('token');
    return config;
})

export default fantApi;