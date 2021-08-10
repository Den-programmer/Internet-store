import { connect } from 'react-redux'
import LoginPage from './loginPage'
import { setIsLoginStatus } from '../../redux/reducers/reducerLogin'

const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin
})

const LoginPageContainer = connect(mapStateToProps, { setIsLoginStatus })(LoginPage)

export default LoginPageContainer