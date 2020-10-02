import { connect } from 'react-redux'
import BannerItems from './bannerItems'
import { changeSliderPage, chooseSliderItem } from '../../../redux/reducers/reducerHome'

const mapStateToProps = (state) => ({
    slider: state.homePage.slider,
    banners: state.homePage.banners
})

const BannerItemsContainer = connect(mapStateToProps, { changeSliderPage, chooseSliderItem })(BannerItems)

export default BannerItemsContainer