import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './loginPage.module.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
    username: Yup.string()
    .min(2, 'User name is too short!')
    .max(50, 'User name is too long!')
    .required('User name is required.'),
    email: Yup.string()
    .email('Invalid email!')
    .required('Email is required!'),
    password: Yup.string()
    .min(6, 'Password is too short!')
    .required('Password is required')
})

const LoginPage = ({ isLogin, setIsLoginStatus }) => {
    const { t } = useTranslation()
    const [isPassword, setPasswordStatus] = useState(false)
    const submit = (values, { setSubmitting }) => {
        const FOrmData = JSON.stringify(values)
        alert(FOrmData)
    }
    return (
        <div className={classes.loginPage}>
            <div className={classes.loginWrapper}>
                <div className={classes.storeTitle}>
                    <h1>{t("Internet_Store")}</h1>
                </div>
                <div className={classes.login}>
                    <h2 className={classes.loginTitle}>{isLogin ? t('login') : t('signup')}</h2>
                    <Formik
                    initialValues={isLogin ? { email: '', password: '' } : {  email: '', password: '', username: '' }}
                    onSubmit={submit}
                    validationSchema={LoginSchema}>
                        <Form>
                            {!isLogin && <div className={classes.textField}>
                                <p className={classes.textField_calling}>{t("Name")}</p>
                                <Field type="text" placeholder={t("Name")} name="username"/>
                            </div>}
                            <div className={classes.textField}>
                                <p className={classes.textField_calling}>{t("email")}</p>
                                <Field type="text" placeholder="store@gmail.com" name="email"/>
                            </div>
                            <div className={classes.textField}>
                                <p className={classes.textField_calling}>{t("password")}</p>
                                <div className={classes.passwordField}>
                                    <Field type={isPassword ? 'password' : 'text'} placeholder={t("password")} name="password"/>
                                    <div className={classes.iconWrapper}>
                                        {isPassword ? <div onClick={() => setPasswordStatus(false)}><FontAwesomeIcon className={classes.icon} icon={faEye} /></div> :
                                            <div onClick={() => setPasswordStatus(true)}><FontAwesomeIcon className={classes.icon} icon={faEyeSlash} /></div>}
                                    </div>
                                </div>
                            </div>
                            <ErrorMessage className={classes.error} name="username" component="div" />
                            <ErrorMessage className={classes.error} name="password" component="div" />
                            <ErrorMessage className={classes.error} name="email" component="div" />
                            {isLogin ? <div className={classes.center}>
                                <button type="submit" className={classes.signUpAndLogin}>
                                    {t("login")}
                                </button>
                            </div> : <div className={classes.center}>
                                <button type="submit" className={classes.signUpAndLogin}>
                                    {t("signup")}
                                </button>
                            </div>}
                        </Form>
                    </Formik>
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