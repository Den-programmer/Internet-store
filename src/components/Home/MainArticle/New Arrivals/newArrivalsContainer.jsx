import { connect } from "react-redux"
import NewArrivals from "./newArrivals"
import { changeArrivalsHoveredStatus, unsetArrivalAsHovered, setProductId } from '../../../../redux/reducers/reducerApp'
import { likeProduct, removeLike } from '../../../../redux/reducers/reducerHome'

const mapStateToProps = (state) => ({
    newArrivals: state.app.newArrivals
})

const NewArrivalscontainer = connect(mapStateToProps, { changeArrivalsHoveredStatus, unsetArrivalAsHovered, likeProduct, removeLike, setProductId })(NewArrivals)

export default NewArrivalscontainer