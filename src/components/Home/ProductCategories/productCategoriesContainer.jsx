import { connect } from 'react-redux'
import ProductCategories from './productCategories'
import { changeProductsCategoriesHoveredStatus, unsetProductsCategoriesAsHovered } from '../../../redux/reducers/reducerHome'

const mapStateToProps = (state) => ({
    categoriesProducts: state.homePage.categoriesProducts,
    categories: state.homePage.categories,
    banner: state.homePage.productCategoriesBanner
})

const ProductCategoriesContainer = connect(mapStateToProps, { changeProductsCategoriesHoveredStatus, unsetProductsCategoriesAsHovered })(ProductCategories)

export default ProductCategoriesContainer