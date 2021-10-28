import { connect } from 'react-redux'
import MainNav from './mainNav'
import { setCategories } from '../../../redux/reducers/reducerShop'

const mapStateToProps = (state) => ({
    navbarLinks: state.app.navigationLinks
})

const MainNavContainer = connect(mapStateToProps, { setCategories })(MainNav)

export default MainNavContainer