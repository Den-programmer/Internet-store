import { connect } from 'react-redux'
import Recommended from './recommended'
import { likeProduct, removeLike, changeRecommendedHoveredStatus, unsetRecommendedAsHovered, setProductId, addToCart } 
from '../../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    recommended: state.app.recommended
})

const RecommendedContainer = connect(mapStateToProps, 
    { changeRecommendedHoveredStatus, unsetRecommendedAsHovered, likeProduct, removeLike, setProductId, addToCart })(Recommended)

export default RecommendedContainer