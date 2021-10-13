import { connect } from 'react-redux'
import MainHeader from './mainHeader'
import { compose } from 'redux'
import { setIsCartPopupOpenStatus, deleteFromCart, changeSearchText } from '../../../../redux/reducers/reducerApp'
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
)(MainHeader)