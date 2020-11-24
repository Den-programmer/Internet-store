import { connect } from 'react-redux'
import BrandsMenu from './brandsMenu'

const mapStateToProps = (state) => ({
    shopFilters: state.shopPage.shopFilters
})

const BrandsMenuContainer = connect(mapStateToProps, {  })(BrandsMenu)

export default BrandsMenuContainer