import { connect } from 'react-redux'
import HeaderPageName from './headerPageName'

const mapStateToProps = (state) => ({
    currentPageName: state.app.currentPageName,
    currentPath: state.app.currentPath
})

const HeaderPageNameContainer = connect(mapStateToProps, {})(HeaderPageName)

export default HeaderPageNameContainer