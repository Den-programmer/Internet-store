import { connect } from 'react-redux'
import Shop from './shop'

const mapStateToProps = (state) => ({
    productsPerRow: state.shopPage.productsPerRow
})

const ShopContainer = connect(mapStateToProps, {})(Shop)

export default ShopContainer