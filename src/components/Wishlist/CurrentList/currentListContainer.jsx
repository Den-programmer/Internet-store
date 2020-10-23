import { connect } from 'react-redux'
import CurrentList from './currentList'

const mapStateToProps = (state) => ({
    products: state.wishlist.products
})

const CurrentListContainer = connect(mapStateToProps, {})(CurrentList)

export default CurrentListContainer