import { AuthAPI } from "../../DAL/authApi"
import { changeFetchingStatus } from "./reducerApp"

const LoginState = {
    email: null,
    name: null,
    userId: null,
    isAdmin: false,
    isLogin: true,
    isAuth: false
}

const SET_IS_LOGIN_STATUS = 'SET_IS_LOGIN_STATUS'
const SET_AUTHENTICATION = 'SET_AUTHENTICATION'

const reducerLogin = (state = LoginState, action) => {
    switch (action.type) {
        case SET_IS_LOGIN_STATUS:
            return {
                ...state,
                isLogin: action.status
            }
        case SET_AUTHENTICATION:
            const { email, name, userId, isAdmin, isLogin, isAuth } = action
            return {
                ...state,
                email,
                name,
                userId,
                isAdmin,
                isLogin,
                isAuth
            }
        default:
            return state
    }
}

/* Action Creators! */

export const authentication = (email, name, userId, isAdmin, isLogin = true, isAuth = true) => ({ type: SET_AUTHENTICATION, email, name, userId, isAdmin, isLogin, isAuth })

export const setIsLoginStatus = (status) => ({ type: SET_IS_LOGIN_STATUS, status })

/* Thunk Creators! */

export const register = (email, username, password) => async (dispatch) => {
    try {
        dispatch(changeFetchingStatus(true))
        const data = await AuthAPI.register(email, username, password)
        dispatch(authentication(data.email, data.username, data._id, data.isAdmin, false, true))
        dispatch(changeFetchingStatus(false))
    } catch (err) {
        alert("Something has gone wrong: " + err)
        dispatch(changeFetchingStatus(false))
    }
}

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch(changeFetchingStatus(true))
        const data = await AuthAPI.login(email, password)
        dispatch(authentication(data.email, data.username, data._id, data.isAdmin, false, true))
        dispatch(changeFetchingStatus(false))
    } catch (err) {
        alert("Something has gone wrong: " + err)
        dispatch(changeFetchingStatus(false))
    }
}

export default reducerLogin