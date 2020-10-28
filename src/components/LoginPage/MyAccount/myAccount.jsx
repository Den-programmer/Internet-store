import React from 'react'
import classes from './myAccount.module.scss'
import LoginForm from './loginForm/loginFormContainer'

const MyAccount = (props) => {
    return (
        <div className={classes.myAccount}>
            <div className={classes.title}>
                <h4>My Account</h4>
            </div>
            <LoginForm />
        </div>
    )
}

export default MyAccount