import { connect } from 'react-redux'
import ProductCategories from './productCategories'
import { likeProduct, removeLike, changeProductsCategoriesHoveredStatus, unsetProductsCategoriesAsHovered, setProductId } 
from '../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    categoriesProducts: state.app.categoriesProducts,
    categories: state.homePage.categories,
    banner: state.homePage.productCategoriesBanner
})

const ProductCategoriesContainer = connect(mapStateToProps, 
    { changeProductsCategoriesHoveredStatus, unsetProductsCategoriesAsHovered, likeProduct, removeLike, setProductId })(ProductCategories)

export default ProductCategoriesContainer