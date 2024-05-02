import axios from "axios";

const token = localStorage.getItem('token')

const apiClient = axios.create({
    baseURL : "http://localhost:8070/api/v1/",
    headers : {
        "Authorization" : `Bearer ${token}`
    }
})

export default apiClient;