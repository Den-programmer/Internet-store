import React from 'react'
import classes from './blog.module.scss'
import BlogArticle from './BlogArticle/blogArticleContainer'
import BlogSidebar from './BlogSidebar/blogSidebar'
import Footer from '../common/Footer/footerContainer'
import Login from '../common/Login/login'
import CommonMainHeader from '../common/CommonMainHeader/commonMainHeaderContainer'
import HeaderNavbar from '../AboutUS/Header/HeaderNavbar/headerNavbar'
import HeaderPageName from '../common/HeaderPageName/headerPageNameContainer'

const Blog = (props) => {
    return (
        <div className={classes.blog}>
            <Login />
            <CommonMainHeader />
            <HeaderNavbar />
            <HeaderPageName currentPageName="Blog" currentPath="Home/Blog"/>
            <div className={classes.dFlex}>
                <BlogArticle />
                <BlogSidebar />
            </div>
            <Footer />
        </div>
    )
}

export default Blog