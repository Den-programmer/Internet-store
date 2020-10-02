import { connect } from 'react-redux'
import EnormousBanner from './enormousBanner'

const mapStateToProps = (state) => ({
    enormousBanner: state.homePage.article.enormousBanner
})

const EnormousBannerContainer = connect(mapStateToProps, {  })(EnormousBanner)

export default EnormousBannerContainer