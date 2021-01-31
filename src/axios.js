import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-b3059/us-central1/api'
})

export default instance;