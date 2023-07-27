import { connect } from 'react-redux'
import LoginPage from './loginPage'
import { setIsLoginStatus, login, register } from '../../redux/reducers/reducerLogin'

const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,
    isFetching: state.app.isFetching
})

const LoginPageContainer = connect(mapStateToProps, { setIsLoginStatus, login, register })(LoginPage)

export default LoginPageContainer