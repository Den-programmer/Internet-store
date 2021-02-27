import { connect } from 'react-redux'
import CurrentList from './currentList'
import { addToCart, removeLike } from '../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    products: state.app.wishlist
})

const CurrentListContainer = connect(mapStateToProps, { addToCart, removeLike })(CurrentList)

export default CurrentListContainer