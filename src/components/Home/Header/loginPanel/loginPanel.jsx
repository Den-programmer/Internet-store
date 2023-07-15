import React from 'react'
import classes from './loginPanel.module.scss'
import heart from './img/heart.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import LaunguageSelectList from '../../../../components/common/Login/LaunguageSelectList/launguageSelectList'
import { useTranslation } from 'react-i18next'

const LoginPanel = ({ setIsLoginStatus, language, languages, setIsLaunguageSelectListOpenStatus, setLanguage, selectListStatus }) => {
    const { t } = useTranslation()
    return (
        <div className={classes.loginPanelWrapper}>
            <div className={classes.loginPanel}>
                <div className={classes.login}>
                    <NavLink onClick={() => setIsLoginStatus(true)} to="/MyAccount" className={classes.login_btn}>
                        <p>{t("login")}</p>
                    </NavLink>
                    <div className={classes.slash}>/</div>
                    <NavLink onClick={() => setIsLoginStatus(false)} to="/MyAccount" className={classes.signup}>
                        <p>{t("signup")}</p>
                    </NavLink>
                </div>
                <div className={classes.helpPanel}>
                    <div className={classes.wishlist}>
                        <img className={classes.iconMargin} src={heart} alt=""/>
                        <NavLink to="/Wishlist">{t("wishlist")}</NavLink>
                    </div>
                    <div className={classes.vertical_line}>|</div>
                    <div onClick={() => setIsLaunguageSelectListOpenStatus(!selectListStatus)} className={classes.language}>
                        <p>{language}</p>
                        <FontAwesomeIcon className={classes.iconMargin + ' ' + classes.sortDownIcon} icon={faSortDown}/>
                        {selectListStatus && <LaunguageSelectList setLanguage={setLanguage} languages={languages}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPanel