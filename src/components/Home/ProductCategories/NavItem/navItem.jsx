import React from 'react'
import classes from './navItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavItem = ({ id, title, icon }) => {
    return <div id={id} className={classes.navItem}>
        <div>
            <FontAwesomeIcon className={classes.navIcon} icon={icon} />
            <h5 className={classes.navTitle}>{title}</h5>
        </div>
    </div>
}

export default NavItem