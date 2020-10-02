import React from 'react'
import classes from './callUs.module.scss'

const CallUs = ({ phone }) => {
    return (
        <div className={classes.contacts}>
            <p>Call us free:</p>
            <span>{phone}</span>
        </div>
    )
}

export default CallUs
