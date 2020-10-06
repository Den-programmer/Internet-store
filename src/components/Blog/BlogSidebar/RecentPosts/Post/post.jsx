import React from 'react'
import classes from './post.module.scss'


const Post = ({ title, year, month, day }) => {
    return <div className={classes.post}>
        <h6 className={classes.post__title}>{title}</h6>
        <p className={classes.post__date}>{month} {day}, {year}</p>
    </div>
}

export default Post