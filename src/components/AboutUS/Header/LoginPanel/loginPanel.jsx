import React from 'react'
import classes from './loginPanel.module.scss'
import Login from '../../../common/Login/loginContainer'

const LoginPanel = (props) => {
    return (
        <div className={classes.loginPanelWrapper}>
            <Login />
        </div>
    )
}

export default LoginPanel