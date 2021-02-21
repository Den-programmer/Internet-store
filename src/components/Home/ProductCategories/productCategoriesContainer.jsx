import { connect } from 'react-redux'
import ProductCategories from './productCategories'
import { changeProductsCategoriesHoveredStatus, unsetProductsCategoriesAsHovered, setProductId } from '../../../redux/reducers/reducerApp'
import { likeProduct, removeLike } from '../../../redux/reducers/reducerHome'

const mapStateToProps = (state) => ({
    categoriesProducts: state.app.categoriesProducts,
    categories: state.homePage.categories,
    banner: state.homePage.productCategoriesBanner
})

const ProductCategoriesContainer = connect(mapStateToProps, 
    { changeProductsCategoriesHoveredStatus, unsetProductsCategoriesAsHovered, likeProduct, removeLike, setProductId })(ProductCategories)

export default ProductCategoriesContainer