import React from 'react'
import classes from './tags.module.scss'

const Tags = ({ tags }) => {
    const Tags = tags.map(item => {
        return <div key={item.id} className={classes.tag}>
            <p className={classes.tag__title}>{item.title}</p>
        </div>
    })
    return (
        <section className={classes.tagsWrapper}>
            <div className={classes.title}>
                <h4>Tags</h4>
            </div>
            <div className={classes.tags}>{Tags}</div>
        </section>
    )
}

export default Tags