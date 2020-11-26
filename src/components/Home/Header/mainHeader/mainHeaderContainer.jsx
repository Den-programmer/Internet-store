import { connect } from 'react-redux'
import MainHeader from './mainHeader'
import { setIsCartPopupOpenStatus, deleteFromCart } from '../../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    cartPopupStatus: state.app.cartPopupStatus,
    productsInCart: state.app.productsInCart,
    total: state.app.total
})

const MainHeaderContainer = connect(mapStateToProps, { setIsCartPopupOpenStatus, deleteFromCart })(MainHeader)

export default MainHeaderContainer