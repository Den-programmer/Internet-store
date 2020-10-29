import React from 'react'
import classes from './logo.module.scss'
import basket from '../../../../images/basket.png'
import { NavLink } from 'react-router-dom'

const Logo = (props) => {
    return (
        <NavLink className={classes.logoWrapper} to="/">
            <div className={classes.logo}>
                <img src={basket} alt="" />
                <h3>Supermart</h3>
            </div>
        </NavLink>
    )
}

export default Logo