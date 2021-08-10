import React from 'react'
import classes from './departments.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTv, faMobile, faFutbol, faLeaf, faShoppingBasket, faCameraRetro, faPlug, faHeadphones, faAppleAlt, faTags } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

const Departments = ({ setIsDepartmentsMenuOpenStatus, isDepartmentsMenuOpen, language }) => {
    const { t } = useTranslation()
    const departmentsMenu = React.createRef()
    const departmentsData = [
        {
            id: 1,
            title: t("fashionAndClothing"),
            icon: faTv,
            path: '/'
        },
        {
            id: 2,
            title: t("Mobile_phones"),
            icon: faMobile,
            path: '/'
        },
        {
            id: 3,
            title: t("SportsAndOuterwear"),
            icon: faFutbol,
            path: '/'
        },
        {
            id: 4,
            title: t("FoodsAndFruits"),
            icon: faLeaf,
            path: '/'
        },
        {
            id: 5,
            title: t("BeautyAndHealth"),
            icon: faTags,
            path: '/'
        },
        {
            id: 6,
            title: t("ShoesAndBags"),
            icon: faShoppingBasket,
            path: '/'
        },
        {
            id: 7,
            title: t("DecorsAndHome"),
            icon: faCameraRetro,
            path: '/'
        },
        {
            id: 8,
            title: t("ElectronicsAndHitech"),
            icon: faPlug,
            path: '/'
        },
        {
            id: 9,
            title: t("Accessories"),
            icon: faHeadphones,
            path: '/'
        },
        {
            id: 10,
            title: t("Digital_Software"),
            icon: faAppleAlt,
            path: '/'
        }
    ]
    const departmentItems = departmentsData.map(d => {
        return <li key={d.id}><FontAwesomeIcon className={classes.menuIcon} icon={d.icon} /><a href={d.path}>{d.title}</a></li>
    })

    document.addEventListener('click', e => {
        if(departmentsMenu.current && !departmentsMenu.current.contains(e.target)) setIsDepartmentsMenuOpenStatus(false)
    })

    return (
        <div style={language === "English" ? { width: '270px' } : language === "Русский" ? { width: '353.5px' } : { width: '302.5px' } } ref={departmentsMenu} onClick={() => setIsDepartmentsMenuOpenStatus(!isDepartmentsMenuOpen)} className={classes.departments}>
            <h3>{t("departments")}</h3>
            {isDepartmentsMenuOpen && <div className={classes.menu}>
                <ul style={language === "English" ? { right: '-84px' } : language === "Русский" ? { right: '-106.5px' } : { right: '-105.5px' } } className={classes.menuList}>
                    {departmentItems}
                </ul>
            </div>}
            <FontAwesomeIcon className={classes.barsIcon} icon={faBars} />
        </div>
    )
}

export default Departments