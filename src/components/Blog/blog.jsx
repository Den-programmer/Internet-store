import React from 'react'
import classes from './blog.module.scss'
import BlogArticle from './BlogArticle/blogArticleContainer'
import BlogSidebar from './BlogSidebar/blogSidebar'
import Footer from '../common/Footer/footerContainer'
import HeaderPageName from '../common/HeaderPageName/headerPageNameContainer'
import Header from '../Home/Header/header'

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