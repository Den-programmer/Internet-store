import { connect } from 'react-redux'
import RecentPosts from './recentPosts'

const mapStateToProps = (state) => ({
    recentPosts: state.blogPage.sidebar.recentPosts
})

const RecentPostsContainer = connect(mapStateToProps, {})(RecentPosts)

export default RecentPostsContainer