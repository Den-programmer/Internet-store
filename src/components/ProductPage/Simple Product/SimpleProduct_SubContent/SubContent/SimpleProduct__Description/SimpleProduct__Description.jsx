import React from 'react'
import classes from './SimpleProduct__Description.module.scss'

const SimpleProduct__Description = ({ description, title }) => {
    return (
        <div className={classes.description}>
            <h4>Description for {title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default SimpleProduct__Description