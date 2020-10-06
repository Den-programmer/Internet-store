import React from 'react'
import classes from './recentPosts.module.scss'
import Post from './Post/post'

const RecentPosts = ({ recentPosts }) => {
    const posts = recentPosts.map(post => {
        return <Post key={post.id} id={post.id} title={post.title} year={post.date.year} month={post.date.month} day={post.date.day}/>
    }) 
    return (
        <section className={classes.recentPosts}>
            <div className={classes.title}>
                <h4>Recent Posts</h4>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </section>
    )
}

export default RecentPosts