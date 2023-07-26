const LoginState = {
    email: null,
    name: null,
    userId: null,
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
            const { email, name, userId, isLogin, isAuth } = action
            return {
                ...state,
                email, 
                name,
                userId,
                isLogin,
                isAuth
            }    
        default:
            return state
    }
}

/* Action Creators! */

export const authentication = (email, name, userId, isLogin = true, isAuth = true) => ({ type: SET_AUTHENTICATION, email, name, userId, isLogin, isAuth })

export const setIsLoginStatus = (status) => ({ type: SET_IS_LOGIN_STATUS, status })

export default reducerLogin