import { connect } from 'react-redux'
import ExtremeBanner from './extremeBanner'

const mapStateToProps = (state) => ({
    extremeBanner: state.homePage.extremeBanner
})

const ExtremeBannerContainer = connect(mapStateToProps, {  })(ExtremeBanner)

export default ExtremeBannerContainer