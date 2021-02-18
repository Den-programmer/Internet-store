import React from 'react'
import classes from './SimpleProduct__Description.module.scss'

const SimpleProduct__Description = (props) => {
    return (
        <div className={classes.description}>
            <h4>Description title</h4>
            <p>Full description</p>
        </div>
    )
}

export default SimpleProduct__Description