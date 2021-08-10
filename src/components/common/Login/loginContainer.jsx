import { connect } from 'react-redux'
import Login from './login'
import { setIsLoginStatus } from '../../../redux/reducers/reducerLogin'
import { setIsLaunguageSelectListOpenStatus, setLanguage } from '../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    selectListStatus: state.app.isLaunguageSelectListOpenStatus,
    language: state.app.language,
    languages: state.app.languages
})

const LoginContainer = connect(mapStateToProps, { setIsLoginStatus, setIsLaunguageSelectListOpenStatus, setLanguage })(Login)

export default LoginContainer