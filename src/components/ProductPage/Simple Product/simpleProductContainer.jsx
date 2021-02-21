import { connect } from "react-redux"
import SimpleProduct from "./simpleProduct"

const mapStateToProps = (state) => ({
    products: state.app.products,
    productId: state.app.productId
})

const SimpleProductContainer = connect(mapStateToProps, {})(SimpleProduct)

export default SimpleProductContainer