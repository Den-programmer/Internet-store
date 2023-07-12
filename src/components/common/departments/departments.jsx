import React, { useEffect } from 'react'
import classes from './departments.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTv, faMobile, faFutbol, faLeaf, faShoppingBasket, faCameraRetro, faPlug, faHeadphones, faAppleAlt, faTags } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

const Departments = ({ setIsDepartmentsMenuOpenStatus, isDepartmentsMenuOpen, setCategories, language }) => {
    const { t } = useTranslation()
    const departmentsMenu = React.createRef()
    const menuList = React.createRef()
    const listItem = React.createRef()
    const departmentsData = [
        {
            id: 1,
            title: t("fashionAndClothing"),
            icon: faTv,
            path: '/',
            category: 'Fashion & Clothing'
        },
        {
            id: 2,
            title: t("Mobile_phones"),
            icon: faMobile,
            path: '/',
            category: 'Mobile Phones'
        },
        {
            id: 3,
            title: t("SportsAndOuterwear"),
            icon: faFutbol,
            path: '/',
            category: 'Sports & Outerwear'
        },
        {
            id: 4,
            title: t("FoodsAndFruits"),
            icon: faLeaf,
            path: '/',
            category: 'Foods & Fruits'
        },
        {
            id: 5,
            title: t("BeautyAndHealth"),
            icon: faTags,
            path: '/',
            category: 'Beauty & Health'
        },
        {
            id: 6,
            title: t("ShoesAndBags"),
            icon: faShoppingBasket,
            path: '/',
            category: 'Shoes & Bags'
        },
        {
            id: 7,
            title: t("DecorsAndHome"),
            icon: faCameraRetro,
            path: '/',
            category: 'Decors & Home'
        },
        {
            id: 8,
            title: t("ElectronicsAndHitech"),
            icon: faPlug,
            path: '/',
            category: 'Electronics & Hitech'
        },
        {
            id: 9,
            title: t("Accessories"),
            icon: faHeadphones,
            path: '/',
            category: 'Accessories'
        },
        {
            id: 10,
            title: t("Digital_Software"),
            icon: faAppleAlt,
            path: '/',
            category: 'Digital Software'
        }
    ]
    const departmentItems = departmentsData.map(d => {
        return <li ref={listItem} onClick={() => setCategories(d.category)} key={d.id}><FontAwesomeIcon className={classes.menuIcon} icon={d.icon} /><a href={d.path}>{d.title}</a></li>
    })

    document.addEventListener('click', e => {
        if(departmentsMenu.current && !departmentsMenu.current.contains(e.target)) setIsDepartmentsMenuOpenStatus(false)
    })
    useEffect(() => {
            let dWidth = departmentsMenu.current.clientWidth
            let node1 = menuList.current
            let node2 = listItem.current
            if(node1 && node2) {
                node1.style.width = dWidth + 'px'
                node2.style.width = dWidth + 'px'
            }
    })
   
    return (
        <div ref={departmentsMenu} onClick={() => setIsDepartmentsMenuOpenStatus(!isDepartmentsMenuOpen)} className={classes.departments}>
            <h3>{t("departments")}</h3>
            {isDepartmentsMenuOpen && <div className={classes.menu}>
                <ul style={ language === 'English' ? { right: '-93px' } : { right: '-116px' }} ref={menuList} className={classes.menuList}>
                    {departmentItems}
                </ul>
            </div>}
            <FontAwesomeIcon className={classes.barsIcon} icon={faBars} />
        </div>
    )
}

export default Departments