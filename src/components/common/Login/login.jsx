import React from 'react'
import classes from './login.module.scss'
import Heart from './img/heartWithOpacity.png'
import { NavLink } from 'react-router-dom'

const Login = (props) => {
    return (
        <div className={classes.loginPanel}>
            <div className={classes.login}>
                <p className={classes.btn_login}>
                    Login
                </p>
                <span>/</span>
                <p className={classes.signup}>
                    Signup
                </p>
                <div className={classes.border}>|</div>
            </div>
            <div className={classes.currency}>
                USD
            </div>
            <div className={classes.smallNavbar}>
                <ul>
                    <li className={classes.navbarItem}>Help</li>
                    <li className={classes.vertical_line}>|</li>
                    <li className={classes.navbarItem}><NavLink to="/Wishlist"><img className={classes.heartIcon} src={Heart} alt="" />Wishlist</NavLink></li>
                </ul>
                <p className={classes.navbarItem}>
                    English
                </p>
            </div>
        </div>
    )
}

export default Login