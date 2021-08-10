import React from 'react'
import classes from './navItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

const NavItem = ({ id, title, icon }) => {
    const { t } = useTranslation()
    return <div id={id} className={classes.navItem}>
        <div>
            <FontAwesomeIcon className={classes.navIcon} icon={icon} />
            <h5 className={classes.navTitle}>{t(title)}</h5>
        </div>
    </div>
}

export default NavItem