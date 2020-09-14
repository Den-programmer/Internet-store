import React from 'react'
import classes from './headerNavbar.module.scss'
import NavbarLink from './NavbarLink/navbarLink'
import Departments from '../../../common/departments/departments'

const HeaderNavbar = ({ navbarLinks, phone, isDepartmentsMenuOpen, setIsDepartmentsMenuOpenStatus }) => {
    const NavbarLinks = navbarLinks.map(link => <NavbarLink title={link.title} path={link.path} id={link.id} key={link.id} />)
    const setMenuStatus = () => setIsDepartmentsMenuOpenStatus(!isDepartmentsMenuOpen)
    return (
        <div className={classes.navbarWrapper}>
            <div className={classes.navbar}>
                <Departments setMenuStatus={setMenuStatus} isDepartmentsMenuOpen={isDepartmentsMenuOpen}/>
                <nav>
                    <ul>
                        {NavbarLinks}
                    </ul>
                </nav>
                <div className={classes.contacts}>
                    <p>Call us free:</p>
                    <span>{phone}</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderNavbar