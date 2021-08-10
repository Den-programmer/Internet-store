import { connect } from 'react-redux'
import CallUs from './callUs'

const mapStateToProps = (state) => ({
    phone: state.aboutUsPage.companyPhone,
    language: state.app.language
})

const CallUsContainer = connect(mapStateToProps, {})(CallUs)

export default CallUsContainer