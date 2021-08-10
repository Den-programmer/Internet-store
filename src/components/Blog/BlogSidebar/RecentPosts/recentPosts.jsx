import React from 'react'
import classes from './recentPosts.module.scss'
import Post from './Post/post'
import { useTranslation } from 'react-i18next'

const RecentPosts = ({ recentPosts }) => {
    const { t } = useTranslation()
    const posts = recentPosts.map(post => {
        return <Post key={post.id} id={post.id} title={post.title} year={post.date.year} month={post.date.month} day={post.date.day}/>
    }) 
    return (
        <section className={classes.recentPosts}>
            <div className={classes.title}>
                <h4>{t("recent_posts")}</h4>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </section>
    )
}

export default RecentPosts