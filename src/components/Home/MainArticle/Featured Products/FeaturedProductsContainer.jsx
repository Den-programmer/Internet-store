import { connect } from 'react-redux'
import FeaturedProducts from './FeaturedProducts'
import { changeFeaturedHoveredStatus, unsetFeaturedAsHovered, likeProduct, removeLike } from '../../../../redux/reducers/reducerHome'

const mapStateToProps = (state) => ({
    featuredProducts: state.homePage.article.featuredProducts
})

const FeaturedProductsContainer = connect(mapStateToProps, 
    { changeFeaturedHoveredStatus, unsetFeaturedAsHovered, likeProduct, removeLike })(FeaturedProducts)

export default FeaturedProductsContainer