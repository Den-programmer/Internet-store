import { connect } from 'react-redux'
import ColourMenu from './colourMenu'

const mapStateToProps = (state) => ({
    shopFilters: state.shopPage.shopFilters
})

const ColourMenuContainer = connect(mapStateToProps, {})(ColourMenu)

export default ColourMenuContainer