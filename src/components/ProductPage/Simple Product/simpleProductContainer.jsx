import { connect } from "react-redux"
import SimpleProduct from "./simpleProduct"
import { addToCart, removeLike, likeProduct } from '../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    products: state.app.products,
    productId: state.app.productId
})

const SimpleProductContainer = connect(mapStateToProps, { addToCart, removeLike, likeProduct })(SimpleProduct)

export default SimpleProductContainer