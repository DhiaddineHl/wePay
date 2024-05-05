import axios from "axios";

const getToken = async () => {
    const token = await localStorage.getItem('token');
    return token;
}

const apiClient = axios.create({
    baseURL : "http://localhost:8070/api/v1/",
})

apiClient.interceptors.request.use(async config => {
    const token = await getToken();
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export default apiClient;