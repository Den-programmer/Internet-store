import React from 'react'
import classes from './AdditionalProductInformation.module.scss'

const AdditionalProductInformation = (props) => {
    return (
        <div className={classes.additionalInformation}>
            <div className={classes.item}>
                <p className={classes.property}>Property</p>
                <p className={classes.value}>Value</p>
            </div>
            <div className={classes.item}>
                <p className={classes.property}>Property</p>
                <p className={classes.value}>Value</p>
            </div>
            <div className={classes.item}>
                <p className={classes.property}>Property</p>
                <p className={classes.value}>Value</p>
            </div>
            <div className={classes.item}>
                <p className={classes.property}>Property</p>
                <p className={classes.value}>Value</p>
            </div>
            <div className={classes.item}>
                <p className={classes.property}>Property</p>
                <p className={classes.value}>Value</p>
            </div>
        </div>
    )
}

export default AdditionalProductInformation