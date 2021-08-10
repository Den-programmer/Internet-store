import { connect } from 'react-redux'
import LoginPanel from './loginPanel'
import { setIsLoginStatus } from '../../../../redux/reducers/reducerLogin'
import { setIsLaunguageSelectListOpenStatus, setLanguage } from '../../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    selectListStatus: state.app.isLaunguageSelectListOpenStatus,
    language: state.app.language,
    languages: state.app.languages 
})

const LoginPanelContainer = connect(mapStateToProps, { setIsLoginStatus, setLanguage, setIsLaunguageSelectListOpenStatus })(LoginPanel)

export default LoginPanelContainer