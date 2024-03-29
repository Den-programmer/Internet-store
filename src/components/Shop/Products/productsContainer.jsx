import { connect } from "react-redux"
import Products from "./products"
import { setProductId, changeProductHoveredStatus, unsetProductAsHovered } from '../../../redux/reducers/reducerApp'
import { changePage } from '../../../redux/reducers/reducerShop'

const mapStateToProps = (state) => ({
    products: state.app.products,
    productsPortion: state.shopPage.productsPortion,
    productsPerRow: state.shopPage.productsPerRow,
    isSidebarShown: state.shopPage.isSidebarShown,
    currentPage: state.shopPage.currentPage,
    totalItemsCount: state.app.totalProductsCount,
    brandsFilter: state.shopPage.brandsFilter,
    priceFilter: state.shopPage.priceFilter,
    colorFilter: state.shopPage.colorFilter,
    typeFilter: state.shopPage.typeFilter,
    category: state.shopPage.category,
    searchText: state.app.searchText
})

const ProductsContainer = connect(mapStateToProps, { setProductId, changeProductHoveredStatus, unsetProductAsHovered, changePage })(Products)

export default ProductsContainer