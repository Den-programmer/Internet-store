import { connect } from 'react-redux'
import CommonMainHeader from './commonMainHeader'
import { setIsCartPopupOpenStatus, deleteFromCart, changeSearchText } from '../../../redux/reducers/reducerApp'
import { compose } from 'redux'
import { withRouter } from 'react-router'

const mapStateToProps = (state) => ({
    cartPopupStatus: state.app.cartPopupStatus,
    productsInCart: state.app.productsInCart,
    total: state.app.total,
    searchText: state.app.searchText
})

export default compose(
    connect(mapStateToProps, { setIsCartPopupOpenStatus, deleteFromCart, changeSearchText }),
    withRouter
)(CommonMainHeader)