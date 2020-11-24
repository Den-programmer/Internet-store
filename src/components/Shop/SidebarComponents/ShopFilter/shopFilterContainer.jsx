import { connect } from 'react-redux'
import ShopFilter from './shopFilter'
import { openShopFiltersMenu } from '../../../../redux/reducers/reducerShop'

const mapStateToProps = (state) => ({
    shopFilters: state.shopPage.shopFilters
})

const ShopFilterContainer = connect(mapStateToProps, { openShopFiltersMenu })(ShopFilter)

export default ShopFilterContainer