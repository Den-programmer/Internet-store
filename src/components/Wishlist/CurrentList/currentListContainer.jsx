import { connect } from 'react-redux'
import CurrentList from './currentList'
import { deleteFromWishlist } from '../../../redux/reducers/reducerWishlist'

const mapStateToProps = (state) => ({
    products: state.wishlist.products
})

const CurrentListContainer = connect(mapStateToProps, { deleteFromWishlist })(CurrentList)

export default CurrentListContainer