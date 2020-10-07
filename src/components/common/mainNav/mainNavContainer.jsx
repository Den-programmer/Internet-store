import { connect } from 'react-redux'
import MainNav from './mainNav'

const mapStateToProps = (state) => ({
    navbarLinks: state.app.navigationLinks
})

const MainNavContainer = connect(mapStateToProps, {  })(MainNav)

export default MainNavContainer