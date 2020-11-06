import { connect } from 'react-redux'
import HotDeals from './hotdeals'
import { changeHotDealsSliderItem, hotDealsTimer } from '../../../../redux/reducers/reducerHome'

const mapStateToProps = (state) => ({
    sliderItems: state.homePage.sidebar.sliderItems,
    sliderItemShown: state.homePage.sidebar.sliderItemShown
})

const HotDealsContainer = connect(mapStateToProps, { changeHotDealsSliderItem, hotDealsTimer })(HotDeals)

export default HotDealsContainer