import React from 'react'
import classes from './blog.module.scss'
import Header from '../AboutUS/Header/header'
import BlogArticle from './BlogArticle/blogArticleContainer'
import BlogSidebar from './BlogSidebar/blogSidebar'
import Footer from '../common/Footer/footerContainer'

const Blog = (props) => {
    return (
        <div className={classes.blog}>
            <Header />
            <div className={classes.dFlex}>
                <BlogArticle />
                <BlogSidebar />
            </div>
            <Footer />
        </div>
    )
}

export default Blog