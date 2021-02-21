import { connect } from "react-redux"
import BestSellers from "./bestsellers"
import { setProductId } from '../../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    bestsellers: state.app.bestsellers
})

const BestSellersContainer = connect(mapStateToProps, { setProductId })(BestSellers)

export default BestSellersContainer