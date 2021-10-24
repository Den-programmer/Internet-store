import { connect } from 'react-redux'
import ShopCategories from './shopCategories'
import { setCategories } from '../../../../redux/reducers/reducerShop'

const mapStateToProps = (state) => ({
    shopCategories: state.shopPage.shopCategories
})

const ShopCategoriesContainer = connect(mapStateToProps, { setCategories })(ShopCategories)

export default ShopCategoriesContainer