import axios from "axios";


const AxiosInstance = axios.create({baseURL: 'http://127.0.0.1:8000/api'});

AxiosInstance.interceptors.request.use((config) =>{
      const token = localStorage.getItem('token');

      if(token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      if (config.data instanceof FormData) {
        // Let the runtime set multipart/form-data with the correct boundary.
        const h = config.headers;
        if (h && typeof (h as { delete?: (name: string) => void }).delete === 'function') {
          (h as { delete: (name: string) => void }).delete('Content-Type');
          (h as { delete: (name: string) => void }).delete('content-type');
        }
        delete (config.headers as Record<string, unknown>)['Content-Type'];
        delete (config.headers as Record<string, unknown>)['content-type'];
      } else {
        config.headers['Content-Type'] = 'application/json';
      }
      return config
});

AxiosInstance.interceptors.response.use( 
    (response) => {
        return response 
    },
    (error) => {
        const status = error.response?.status;
        if (status !== undefined && status !== 422) {
            console.error('Unexpected response error: ', error);
        }
        return Promise.reject(error);
    }
);
export default AxiosInstance;