import React from 'react'
import classes from './noProducts.module.scss'
import { NavLink } from 'react-router-dom'

const NoProducts = ({ title, link, path, image, bordered }) => {
    return (
        <div style={{ border: bordered ? '1px solid #E8E8E8' : 'none' }} className={classes.noProducts}>
            <img className={classes.image} src={image} alt="" />
            <h4>{title}<NavLink to={path}>{link}</NavLink>!</h4>
        </div>
    )
}

export default NoProducts