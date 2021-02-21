import { connect } from "react-redux"
import Products from "./products"
import { setProductId, changeProductHoveredStatus, unsetProductAsHovered } from '../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    products: state.app.products,
    productsPortion: state.shopPage.productsPortion,
    productsPerRow: state.shopPage.productsPerRow,
    isSidebarShown: state.shopPage.isSidebarShown
})

const ProductsContainer = connect(mapStateToProps, { setProductId, changeProductHoveredStatus, unsetProductAsHovered })(Products)

export default ProductsContainer