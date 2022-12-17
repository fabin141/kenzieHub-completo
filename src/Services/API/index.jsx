import axios from "axios"

const api = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    timeout:'1500'
}); 

export default api