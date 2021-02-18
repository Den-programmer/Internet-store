import { connect } from 'react-redux'
import SubContent from './SubContent'
import { addComment } from '../../../../../redux/reducers/reducerProductPage'
import { setTextError } from '../../../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    menuItemChosenId: state.productPage.menuItemChosenId,
    comments: state.productPage.customerReview.comments,
    authorName: state.profile.name,
    authorPhoto: state.profile.userPhoto,
    rating: state.profile.rating,
    error: state.app.errorText
})

const SubContentContainer = connect(mapStateToProps, { addComment, setTextError })(SubContent)

export default SubContentContainer