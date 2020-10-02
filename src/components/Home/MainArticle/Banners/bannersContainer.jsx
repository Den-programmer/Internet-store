import { connect } from 'react-redux'
import Banners from './banners'

const mapStateToProps = (state) => ({
    banners: state.homePage.article.banners
})

const BannersContainer = connect(mapStateToProps, {  })(Banners)

export default BannersContainer