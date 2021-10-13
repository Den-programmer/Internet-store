import React from 'react'
import classes from './login.module.scss'
import Heart from './img/heartWithOpacity.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import LaunguageSelectList from './LaunguageSelectList/launguageSelectList'
import { useTranslation } from 'react-i18next'

const Login = React.memo(({ setIsLoginStatus, setIsLaunguageSelectListOpenStatus, selectListStatus, language, setLanguage, languages }) => {
    const { t } = useTranslation()
    const popup = React.createRef()
    document.addEventListener('click', e => {
        if (popup.current && !popup.current.contains(e.target)) setIsLaunguageSelectListOpenStatus(false)
    })
    return (
        <div className={classes.loginPanel}>
            <div className={classes.login}>
                <NavLink onClick={() => setIsLoginStatus(true)} to="/MyAccount" className={classes.btn_login}>
                    {t("login")}
                </NavLink>
                <span>/</span>
                <NavLink onClick={() => setIsLoginStatus(false)} to="/MyAccount" className={classes.signup}>
                    {t("signup")}
                </NavLink>
                <div className={classes.border}>|</div>
            </div>
            <div className={classes.currency}>
                USD
            </div>
            <div className={classes.smallNavbar}>
                <ul>
                    <li className={classes.navbarItem}>{t("help")}</li>
                    <li className={classes.vertical_line}>|</li>
                    <li className={classes.navbarItem}><NavLink to="/Wishlist"><img className={classes.heartIcon} src={Heart} alt="" />{t("wishlist")}</NavLink></li>
                </ul>
                <div onClick={() => setIsLaunguageSelectListOpenStatus(!selectListStatus)} className={classes.launguage}>
                    <p className={classes.navbarItem}>
                        {language}
                    </p>
                    {selectListStatus && <div ref={popup} className={classes.popup}><LaunguageSelectList setLanguage={setLanguage} languages={languages}/></div>}
                    <FontAwesomeIcon className={classes.faAngleDownIcon} icon={faAngleDown}/>
                </div>
            </div>
        </div>
    )
})

export default Login