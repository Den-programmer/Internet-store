import React from 'react'
import classes from './loginPanel.module.scss'
import heart from './img/heart.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

const LoginPanel = (props) => {
    return (
        <div className={classes.loginPanelWrapper}>
            <div className={classes.loginPanel}>
                <div className={classes.login}>
                    <div className={classes.login_btn}>
                        <p>Login</p>
                    </div>
                    <div className={classes.slash}>/</div>
                    <div className={classes.singup}>
                        <p>Signup</p>
                    </div>
                    <div className={classes.vertical_line}>|</div>
                    <div className={classes.currency}>
                        <p>USD</p>
                    </div>
                </div>
                <div className={classes.helpPanel}>
                    <div className={classes.help_btn}>
                        <p>Help</p>
                    </div>
                    <div className={classes.vertical_line}>|</div>
                    <div className={classes.wishlist}>
                        <img className={classes.iconMargin} src={heart} alt=""/>
                        <p>Wishlist</p>
                    </div>
                    <div className={classes.vertical_line}>|</div>
                    <div className={classes.language}>
                        <p>English</p>
                        <FontAwesomeIcon className={classes.iconMargin + ' ' + classes.sortDownIcon} icon={faSortDown}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPanel