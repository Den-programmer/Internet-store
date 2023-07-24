import axios from 'axios'

export const instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:5000/api/",
    // headers: {
    //     "API-KEY": process.env.API_KEY_SAMURAI
    // }
})