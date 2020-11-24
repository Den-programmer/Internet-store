import { connect } from 'react-redux'
import ShopCategories from './shopCategories'

const mapStateToProps = (state) => ({
    shopCategories: state.shopPage.shopCategories
})

const ShopCategoriesContainer = connect(mapStateToProps, {})(ShopCategories)

export default ShopCategoriesContainer