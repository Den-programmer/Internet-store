import { instance } from './api'

export const AuthAPI = {
    register: (email, username, password) => {
        return instance.post(`auth/register`, {
            email,
            username,
            password
        }).then(res => res.data)
    },
    login: (email, password) => {
        return instance.post(`auth/login`, {
            email, 
            password
        }).then(res => res.data)
    }
}