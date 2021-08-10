import { connect } from 'react-redux'
import Departments from './departments'
import { setIsDepartmentsMenuOpenStatus } from '../../../redux/reducers/reducerAboutUs'

const mapStateToProps = (state) => ({
    isDepartmentsMenuOpen: state.aboutUsPage.isDepartmentsMenuOpen,
    language: state.app.language
})

const DepartmentsContainer = connect(mapStateToProps, { setIsDepartmentsMenuOpenStatus })(Departments)

export default DepartmentsContainer