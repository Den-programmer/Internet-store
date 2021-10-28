import React from 'react'
import classes from './mainNav.module.scss'
import NavbarLink from './NavbarLink/navbarLink'

const MainNav = ({ navbarLinks, setCategories }) => {
    const NavbarLinks = navbarLinks.map(link => <NavbarLink setCategories={setCategories} title={link.title} path={link.path} id={link.id} key={link.id} />)
    return (
        <nav className={classes.mainNav}>
            <ul>
                {NavbarLinks}
            </ul>
        </nav>
    )
}

export default MainNav