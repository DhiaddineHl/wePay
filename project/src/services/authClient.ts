import axios from "axios";


const authClient = axios.create({
    baseURL : "http://localhost:8070/api/v1/auth/"
})

export default authClient;