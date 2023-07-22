import { connect } from 'react-redux'
import Order from './order'
import { changeFreeShippingStatus, countShippingTotal, changeFlatShippingStatus } from '../../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    products: state.app.productsInCart,
    subtotal: state.app.total,
    isFreeShipping: state.app.isFreeShipping,
    isFlatShipping: state.app.isFlatShipping,
    shippingTotal: state.app.shippingTotal
})

const OrderContainer = connect(mapStateToProps, { changeFreeShippingStatus, countShippingTotal, changeFlatShippingStatus })(Order)

export default OrderContainer