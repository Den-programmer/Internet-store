import { connect } from 'react-redux'
import MainNav from './mainNav'

const mapStateToProps = (state) => ({
    navbarLinks: state.aboutUsPage.navigationLinks
})

const MainNavContainer = connect(mapStateToProps, {})(MainNav)

export default MainNavContainer