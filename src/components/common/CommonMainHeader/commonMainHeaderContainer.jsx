import { connect } from 'react-redux'
import CommonMainHeader from './commonMainHeader'
import { setIsCartPopupOpenStatus, deleteFromCart } from '../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    cartPopupStatus: state.app.cartPopupStatus,
    productsInCart: state.app.productsInCart,
    total: state.app.total
})

const CommonMainHeaderContainer = connect(mapStateToProps, { setIsCartPopupOpenStatus, deleteFromCart })(CommonMainHeader)

export default CommonMainHeaderContainer