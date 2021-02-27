import { connect } from "react-redux"
import NewArrivals from "./newArrivals"
import { likeProduct, removeLike, changeArrivalsHoveredStatus, unsetArrivalAsHovered, setProductId, addToCart } from '../../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    newArrivals: state.app.newArrivals
})

const NewArrivalscontainer = connect(mapStateToProps, { changeArrivalsHoveredStatus, unsetArrivalAsHovered, likeProduct, removeLike, setProductId, addToCart })(NewArrivals)

export default NewArrivalscontainer