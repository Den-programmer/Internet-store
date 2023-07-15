import React, { useEffect, useState } from 'react'
import classes from './mainNav.module.scss'
import NavbarLink from './NavbarLink/navbarLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const MainNav = ({ navbarLinks, setCategories }) => {
    const NavbarLinks = navbarLinks.map(link => <NavbarLink setCategories={setCategories} title={link.title} path={link.path} id={link.id} key={link.id} />)
    const [isNavOpen, setIsNavOpenStatus] = useState(false)
    useEffect(() => {
        let screenWidth = window.screen.width
        if(screenWidth > 540) setIsNavOpenStatus(true)
    })
    return (
        <div className={classes.navigationWrapper}>
            <div className={classes.navButtonWrapper}>
                <FontAwesomeIcon 
                onClick={() => setIsNavOpenStatus(!isNavOpen)} 
                className={classes.navButton} 
                icon={faBars}/>
            </div>
            {isNavOpen && <nav className={classes.mainNav}>
                <ul>
                    {NavbarLinks}
                </ul>
            </nav>}
        </div>
    )
}

export default MainNav