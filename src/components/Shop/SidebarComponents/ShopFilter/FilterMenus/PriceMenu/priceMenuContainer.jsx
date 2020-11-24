import PriceMenu from './priceMenu'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    shopFilters: state.shopPage.shopFilters
})

const PriceMenuContainer = connect(mapStateToProps, {})(PriceMenu)

export default PriceMenuContainer