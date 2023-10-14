import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:"2e9ade8ec33f48f8abf3a3418b920de0",
    }
})