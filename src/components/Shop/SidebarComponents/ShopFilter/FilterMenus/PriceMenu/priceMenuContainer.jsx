import PriceMenu from './priceMenu'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    shopFilters: state.shopPage.shopFilters,
    priceFilter: state.shopPage.priceFilter
})

const PriceMenuContainer = connect(mapStateToProps, {  })(PriceMenu)

export default PriceMenuContainer