import { connect } from 'react-redux'
import BlogArticle from './blogArticle'

const mapStateToProps = (state) => ({
    news: state.blogPage.article.news
})
 
const BlogArticleContainer = connect(mapStateToProps, {})(BlogArticle)

export default BlogArticleContainer