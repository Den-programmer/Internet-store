import { connect } from "react-redux"
import PageTitle from "./pageTitle"

const mapStateToProps = (state) => ({
    currentShopPage: state.shopPage.currentShopPage
})

const PageTitleContainer = connect(mapStateToProps, {})(PageTitle)

export default PageTitleContainer