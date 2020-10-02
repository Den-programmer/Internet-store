import { connect } from 'react-redux'
import Departments from './departments'
import { setIsDepartmentsMenuOpenStatus } from '../../../redux/reducers/reducerAboutUs'

const mapStateToProps = (state) => ({
    isDepartmentsMenuOpen: state.aboutUsPage.isDepartmentsMenuOpen
})

const DepartmentsContainer = connect(mapStateToProps, { setIsDepartmentsMenuOpenStatus })(Departments)

export default DepartmentsContainer