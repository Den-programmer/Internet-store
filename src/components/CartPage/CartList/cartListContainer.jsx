import { connect } from 'react-redux'
import { deleteFromCart, changeFreeShippingStatus, changeFlatShippingStatus, countShippingTotal } from '../../../redux/reducers/reducerApp'
import CartList from './cartList'

const mapStateToProps = (state) => ({
    productsInCart: state.app.productsInCart,
    isFreeShipping: state.app.isFreeShipping,
    isFlatShipping: state.app.isFlatShipping,
    total: state.app.total,
    shippingTotal: state.app.shippingTotal
})

const CartListContainer = connect(mapStateToProps, { deleteFromCart, changeFreeShippingStatus, changeFlatShippingStatus, countShippingTotal })(CartList)

export default CartListContainer