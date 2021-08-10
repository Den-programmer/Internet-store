import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './loginPage.module.scss'

const LoginPage = ({ isLogin, setIsLoginStatus }) => {
    const { t } = useTranslation()
    const [isPassword, setPasswordStatus] = useState(false)
    return (
        <div className={classes.loginPage}>
            <div className={classes.loginWrapper}>
                <div className={classes.storeTitle}>
                    <h1>{t("Internet_Store")}</h1>
                </div>
                <div className={classes.login}>
                    <h2 className={classes.loginTitle}>{isLogin ? t('login') : t('signup')}</h2>
                    {!isLogin && <div className={classes.textField}>
                        <p className={classes.textField_calling}>{t("Name")}</p>
                        <input type="text" placeholder={t("Name")} />
                    </div>}
                    <div className={classes.textField}>
                        <p className={classes.textField_calling}>{t("email")}</p>
                        <input type="text" placeholder="store@gmail.com" />
                    </div>
                    <div className={classes.textField}>
                        <p className={classes.textField_calling}>{t("password")}</p>
                        <div className={classes.passwordField}>
                            <input type={isPassword ? 'password' : 'text'} placeholder={t("password")} />
                            <div className={classes.iconWrapper}>
                                {isPassword ? <div onClick={() => setPasswordStatus(false)}><FontAwesomeIcon className={classes.icon} icon={faEye} /></div> :
                                    <div onClick={() => setPasswordStatus(true)}><FontAwesomeIcon className={classes.icon} icon={faEyeSlash} /></div>}
                            </div>
                        </div>
                    </div>
                    {isLogin ? <div className={classes.signUpAndLogin}>
                        {t("login")}
                    </div> : <div className={classes.signUpAndLogin}>
                        {t("signup")}
                    </div>}
                </div>
                <div className={classes.hint}>
                    {!isLogin ? <p onClick={() => setIsLoginStatus(true)} className={classes.hintText}>{t("hasAnAccount")}</p> :
                        <p onClick={() => setIsLoginStatus(false)} className={classes.hintText}>{t("noAccount")}</p>}
                </div>
            </div>
        </div>
    )
}

export default LoginPage