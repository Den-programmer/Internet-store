import { connect } from "react-redux"
import TypeMenu from "./TypeMenu"

const mapStateToProps = (state) => ({
    shopFilters: state.shopPage.shopFilters
})

const TypeMenuContainer = connect(mapStateToProps, {})(TypeMenu)

export default TypeMenuContainer