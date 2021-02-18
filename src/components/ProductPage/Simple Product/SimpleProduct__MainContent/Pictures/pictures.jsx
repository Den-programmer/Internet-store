import React from 'react'
import classes from './pictures.module.scss'
import template from '../../../../../images/photoTemplate.jpg'

const Pictures = (props) => {
    return (
        <div className={classes.pictures}>
            <div className={classes.mainPhoto}>
                <img src={template} alt="" />
            </div>
            <div className={classes.photoList}>
                <img src={template} alt="" />
                <img src={template} alt="" />
                <img src={template} alt="" />
                <img src={template} alt="" />
            </div>
        </div>
    )
}

export default Pictures