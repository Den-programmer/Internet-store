import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarLink = ({ title, path, method }) => {
    debugger
    return <li><NavLink onClick={method} to={path}>{title}</NavLink></li>
}

export default NavbarLink