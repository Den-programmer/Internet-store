import { connect } from "react-redux"
import BestSellers from "./bestsellers"

const mapStateToProps = (state) => ({
    bestsellers: state.homePage.article.bestsellers
})

const BestSellersContainer = connect(mapStateToProps, {  })(BestSellers)

export default BestSellersContainer