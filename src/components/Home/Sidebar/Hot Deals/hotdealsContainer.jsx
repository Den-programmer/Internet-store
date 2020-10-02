import { connect } from 'react-redux'
import HotDeals from './hotdeals'
import { changeHotDealsSliderItem } from '../../../../redux/reducers/reducerHome'

const mapStateToProps = (state) => ({
    sliderItems: state.homePage.sidebar.sliderItems,
    sliderItemShown: state.homePage.sidebar.sliderItemShown
})

const HotDealsContainer = connect(mapStateToProps, { changeHotDealsSliderItem })(HotDeals)

export default HotDealsContainer