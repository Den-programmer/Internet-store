import { connect } from 'react-redux'
import HeaderNavbar from './headerNavbar'
import { setIsDepartmentsMenuOpenStatus } from '../../../../redux/reducers/reducerAboutUs'

const mapStateToProps = (state) => ({
    navbarLinks: state.aboutUsPage.navigationLinks,
    phone: state.aboutUsPage.companyPhone,
    isDepartmentsMenuOpen: state.aboutUsPage.isDepartmentsMenuOpen
})

const HeaderNavbarContainer = connect(mapStateToProps, { setIsDepartmentsMenuOpenStatus })(HeaderNavbar)

export default HeaderNavbarContainer