import { connect } from 'react-redux'
import FeaturedProducts from './FeaturedProducts'
import { changeFeaturedHoveredStatus, unsetFeaturedAsHovered } from '../../../../redux/reducers/reducerHome'

const mapStateToProps = (state) => ({
    featuredProducts: state.homePage.article.featuredProducts
})

const FeaturedProductsContainer = connect(mapStateToProps, { changeFeaturedHoveredStatus, unsetFeaturedAsHovered })(FeaturedProducts)

export default FeaturedProductsContainer