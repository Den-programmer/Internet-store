import React from 'react'
import classes from './login.module.scss'
import Heart from './img/heartWithOpacity.png'

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
                    <li>Help</li>
                    <li className={classes.vertical_line}>|</li>
                    <li><img className={classes.heartIcon} src={Heart} alt="" />Wishlist</li>
                </ul>
                <p className={classes.vertical_line}>|</p>
                <p>
                    English
                </p>
            </div>
        </div>
    )
}

export default Login