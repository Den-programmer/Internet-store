import { connect } from "react-redux"
import Products from "./products"
import { onPopularProductMove, removePopularProductsHoveredStatus } from '../../../redux/reducers/reducerShop'

const mapStateToProps = (state) => ({
    popularProducts: state.shopPage.popularProducts,
    productsPortion: state.shopPage.productsPortion,
    productsPerRow: state.shopPage.productsPerRow,
    isSidebarShown: state.shopPage.isSidebarShown
})

const ProductsContainer = connect(mapStateToProps, { onPopularProductMove, removePopularProductsHoveredStatus })(Products)

export default ProductsContainer