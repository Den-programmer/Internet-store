import { connect } from "react-redux"
import Products from "./products"
import { onPopularProductMove, removePopularProductsHoveredStatus } from '../../../redux/reducers/reducerShop'

const mapStateToProps = (state) => ({
    popularProducts: state.shopPage.popularProducts
})

const ProductsContainer = connect(mapStateToProps, { onPopularProductMove, removePopularProductsHoveredStatus })(Products)

export default ProductsContainer