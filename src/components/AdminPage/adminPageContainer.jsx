import { connect } from 'react-redux'
import AdminPage from './adminPage'

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  isAdmin: state.auth.isAdmin
})

const AdminPageContainer = connect(mapStateToProps, { })(AdminPage)

export default AdminPageContainer