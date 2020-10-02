import { connect } from 'react-redux'
import Recommended from './recommended'
import { changeRecommendedHoveredStatus, unsetRecommendedAsHovered } from '../../../../redux/reducers/reducerHome'

const mapStateToProps = (state) => ({
    recommended: state.homePage.article.recommended
})

const RecommendedContainer = connect(mapStateToProps, { changeRecommendedHoveredStatus, unsetRecommendedAsHovered })(Recommended)

export default RecommendedContainer