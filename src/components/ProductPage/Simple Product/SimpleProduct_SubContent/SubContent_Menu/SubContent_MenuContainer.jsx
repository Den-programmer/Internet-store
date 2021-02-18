import { connect } from 'react-redux'
import SubContent_Menu from './SubContent_Menu'
import { changeProductMenuItem, changeMenuItemChosenId } from '../../../../../redux/reducers/reducerProductPage'

const mapStateToProps = (state) => ({
    menu: state.productPage.menu
})

const SubContent_MenuContainer = connect(mapStateToProps, { changeProductMenuItem, changeMenuItemChosenId })(SubContent_Menu)

export default SubContent_MenuContainer