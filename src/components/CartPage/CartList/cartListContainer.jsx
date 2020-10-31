import { connect } from 'react-redux'
import { deleteFromCart } from '../../../redux/reducers/reducerApp'
import CartList from './cartList'

const mapStateToProps = (state) => ({
    productsInCart: state.app.productsInCart
})

const CartListContainer = connect(mapStateToProps, { deleteFromCart })(CartList)

export default CartListContainer