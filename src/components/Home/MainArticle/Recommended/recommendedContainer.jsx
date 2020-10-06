import { connect } from 'react-redux'
import Recommended from './recommended'
import { changeRecommendedHoveredStatus, unsetRecommendedAsHovered, likeProduct, removeLike } from '../../../../redux/reducers/reducerHome'

const mapStateToProps = (state) => ({
    recommended: state.homePage.article.recommended
})

const RecommendedContainer = connect(mapStateToProps, 
    { changeRecommendedHoveredStatus, unsetRecommendedAsHovered, likeProduct, removeLike })(Recommended)

export default RecommendedContainer