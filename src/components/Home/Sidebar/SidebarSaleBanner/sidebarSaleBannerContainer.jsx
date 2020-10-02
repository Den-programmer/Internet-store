import { connect } from 'react-redux'
import SidebarSaleBanner from './sidebarSaleBanner'

const mapStateToProps = (state) => ({
    saleBanners: state.homePage.sidebar.saleBanners
})

const SidebarSaleBannerContainer = connect(mapStateToProps, {})(SidebarSaleBanner)

export default SidebarSaleBannerContainer