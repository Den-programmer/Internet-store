import { connect } from 'react-redux'
import FeaturedProducts from './FeaturedProducts'
import { changeFeaturedHoveredStatus, unsetFeaturedAsHovered, setProductId } from '../../../../redux/reducers/reducerApp'
import { likeProduct, removeLike } from '../../../../redux/reducers/reducerHome'

const mapStateToProps = (state) => ({
    featuredProducts: state.app.featuredProducts
})

const FeaturedProductsContainer = connect(mapStateToProps, 
    { changeFeaturedHoveredStatus, unsetFeaturedAsHovered, likeProduct, removeLike, setProductId })(FeaturedProducts)

export default FeaturedProductsContainer