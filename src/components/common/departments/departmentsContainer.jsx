import { connect } from 'react-redux'
import Departments from './departments'
import { setIsDepartmentsMenuOpenStatus } from '../../../redux/reducers/reducerAboutUs'
import { setCategories } from '../../../redux/reducers/reducerShop'

const mapStateToProps = (state) => ({
    isDepartmentsMenuOpen: state.aboutUsPage.isDepartmentsMenuOpen,
    language: state.app.language
})

const DepartmentsContainer = connect(mapStateToProps, { setIsDepartmentsMenuOpenStatus, setCategories })(Departments)

export default DepartmentsContainer