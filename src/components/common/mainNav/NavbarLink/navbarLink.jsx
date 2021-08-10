import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const NavbarLink = ({ title, path, method }) => {
    const { t } = useTranslation()
    return <li><NavLink onClick={method} to={path}>{t(title)}</NavLink></li>
}

export default NavbarLink