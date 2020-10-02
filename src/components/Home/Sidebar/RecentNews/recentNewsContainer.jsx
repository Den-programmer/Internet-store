import { connect } from 'react-redux'
import RecentNews from './recentNews'
import { changeNews } from '../../../../redux/reducers/reducerHome'

const mapStateToProps = (state) => ({
    news: state.homePage.sidebar.news,
    newsShown: state.homePage.sidebar.newsShown
})

const RecentNewsContainer = connect(mapStateToProps, { changeNews })(RecentNews)

export default RecentNewsContainer