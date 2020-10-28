import React from 'react'
import classes from './loginForm.module.scss'

const LoginForm = (props) => {
    return (
        <div className={classes.loginFormWrapper}>
            <div className={classes.loginForm}>
                <div className={classes.loginForm__title}>
                    <h3>Login</h3>
                </div>
                <div className={classes.form}>
                    <div className={classes.email + ' ' + classes.formItem}>
                        <p>Username or email <span className={classes.importantSign}>*</span></p>
                        <input type="text" />
                    </div>
                    <div className={classes.password + ' ' + classes.formItem}>
                        <p>Password <span className={classes.importantSign}>*</span></p>
                        <input type="password" />
                    </div>
                    <div className={classes.confirmation}>
                        <div className={classes.btn_login}>
                            <button>Login</button>
                        </div>
                        <div className={classes.btn_rememberMe}>
                            <input type="checkbox" />
                            <p>Remember Me</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm