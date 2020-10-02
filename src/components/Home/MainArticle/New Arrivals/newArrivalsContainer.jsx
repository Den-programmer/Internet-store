import { connect } from "react-redux"
import NewArrivals from "./newArrivals"
import { changeArrivalsHoveredStatus, unsetArrivalAsHovered } from '../../../../redux/reducers/reducerHome'

const mapStateToProps = (state) => ({
    newArrivals: state.homePage.article.newArrivals
})

const NewArrivalscontainer = connect(mapStateToProps, { changeArrivalsHoveredStatus, unsetArrivalAsHovered })(NewArrivals)

export default NewArrivalscontainer