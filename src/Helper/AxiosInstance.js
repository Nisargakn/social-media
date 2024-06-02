import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "http://localhost:7532"
})

export default axiosInstance;