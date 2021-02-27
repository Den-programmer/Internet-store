import { connect } from 'react-redux'
import FeaturedProducts from './FeaturedProducts'
import { likeProduct, removeLike, changeFeaturedHoveredStatus, unsetFeaturedAsHovered, setProductId, addToCart } 
from '../../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    featuredProducts: state.app.featuredProducts
})

const FeaturedProductsContainer = connect(mapStateToProps, 
    { changeFeaturedHoveredStatus, unsetFeaturedAsHovered, likeProduct, removeLike, setProductId, addToCart })(FeaturedProducts)

export default FeaturedProductsContainer