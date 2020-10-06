import React from 'react'
import classes from './blogSidebar.module.scss'
import BlogCategories from './blogCategories/blogCategoriesContainer'
import RecentPosts from './RecentPosts/recentPostsContainer'
import Archives from './Archives/archivesContainer'
import Tags from './Tags/tagsContainer'

const BlogSidebar = (props) => {
    return (
        <div className={classes.blogSidebar}>
            <BlogCategories />
            <RecentPosts />
            <Archives />
            <Tags />
        </div>
    )
}

export default BlogSidebar