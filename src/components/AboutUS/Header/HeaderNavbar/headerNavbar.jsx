import React from 'react'
import classes from './headerNavbar.module.scss'
import Departments from '../../../common/departments/departmentsContainer'
import CallUs from '../../../common/callUs/callUsContainer'
import MainNav from '../../../common/mainNav/mainNavContainer'

const HeaderNavbar = (props) => {
    return (
        <div className={classes.navbarWrapper}>
            <div className={classes.navbar}>
                <Departments />
                <MainNav />
                <CallUs />
            </div>
        </div>
    )
}

export default HeaderNavbar