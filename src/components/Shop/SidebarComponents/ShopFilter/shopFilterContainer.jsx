import { connect } from 'react-redux'
import ShopFilter from './shopFilter'
import { openShopFiltersMenu, changePriceFilter, setColorFilter, setBrandsFilter, setTypeFilter } from '../../../../redux/reducers/reducerShop'

const mapStateToProps = (state) => ({
    shopFilters: state.shopPage.shopFilters,
    productsPortion: state.shopPage.productsPortion
})

const ShopFilterContainer = connect(mapStateToProps, { openShopFiltersMenu, changePriceFilter, setColorFilter, setBrandsFilter, setTypeFilter })(ShopFilter)

export default ShopFilterContainer