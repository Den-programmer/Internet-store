import { connect } from 'react-redux'
import BlogCategories from './blogCategories'

const mapStateToProps = (state) => ({
    categories: state.blogPage.sidebar.categories
})

const BlogCategoriesContainer = connect(mapStateToProps, {})(BlogCategories)

export default BlogCategoriesContainer