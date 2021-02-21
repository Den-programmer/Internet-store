import { connect } from 'react-redux'
import Recommended from './recommended'
import { changeRecommendedHoveredStatus, unsetRecommendedAsHovered, setProductId } from '../../../../redux/reducers/reducerApp'
import { likeProduct, removeLike } from '../../../../redux/reducers/reducerHome'

const mapStateToProps = (state) => ({
    recommended: state.app.recommended
})

const RecommendedContainer = connect(mapStateToProps, 
    { changeRecommendedHoveredStatus, unsetRecommendedAsHovered, likeProduct, removeLike, setProductId })(Recommended)

export default RecommendedContainer