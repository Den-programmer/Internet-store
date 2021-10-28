import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const NavbarLink = ({ title, path, setCategories }) => {
    const { t } = useTranslation()
    const setFashion = () => setCategories('Fashion & Clothing')
    const setElectronics = () => setCategories('Electronics & Hitech')
    return <li><NavLink onClick={title === 'Fashion' ? setFashion : title === 'Electronics' ? setElectronics : () => ({})} to={path}>{t(title)}</NavLink></li>
}

export default NavbarLink