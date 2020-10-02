import { connect } from 'react-redux'
import CallUs from './callUs'

const mapStateToProps = (state) => ({
    phone: state.aboutUsPage.companyPhone
})

const CallUsContainer = connect(mapStateToProps, {})(CallUs)

export default CallUsContainer