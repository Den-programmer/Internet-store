import React from 'react'

const NavbarLink = ({ title, path }) => {
    return (
        <li><a href={path}>{title}</a></li>
    )
}

export default NavbarLink