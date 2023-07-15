import React from 'react'
import classes from './navbar.module.scss'
import Departments from '../../../common/departments/departmentsContainer'
import MainNav from '../../../common/mainNav/mainNavContainer'
import CallUs from '../../../common/callUs/callUsContainer'

const Navbar = (props) => {
    return (
        <div className={classes.navbarWrapper}>
            <div className={classes.navbar}>
                <div className={classes.departmentsWrapper}>
                    <Departments />
                </div>
                <div className={classes.mainPartWrapper}>
                    <MainNav />
                    <div className={classes.callUsWrapper}>
                        <CallUs />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar