import React from 'react'
import classes from './departments.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTv, faMobile, faFutbol, faLeaf, faShoppingBasket, faCameraRetro, faPlug, faHeadphones, faAppleAlt, faTags } from '@fortawesome/free-solid-svg-icons'

const Departments = ({ setIsDepartmentsMenuOpenStatus, isDepartmentsMenuOpen }) => {
    const departmentsData = [
        {
            id: 1,
            title: 'Fashion & Clothing',
            icon: faTv,
            path: '/'
        },
        {
            id: 2,
            title: 'Mobile Phones',
            icon: faMobile,
            path: '/'
        },
        {
            id: 3,
            title: 'Sports & Outerwear',
            icon: faFutbol,
            path: '/'
        },
        {
            id: 4,
            title: 'Foods & Fruits',
            icon: faLeaf,
            path: '/'
        },
        {
            id: 5,
            title: 'Beauty & Health',
            icon: faTags,
            path: '/'
        },
        {
            id: 6,
            title: 'Shoes & Bags',
            icon: faShoppingBasket,
            path: '/'
        },
        {
            id: 7,
            title: 'Decors & Home',
            icon: faCameraRetro,
            path: '/'
        },
        {
            id: 8,
            title: 'Electronics & Hitech',
            icon: faPlug,
            path: '/'
        },
        {
            id: 9,
            title: 'Accessories',
            icon: faHeadphones,
            path: '/'
        },
        {
            id: 10,
            title: 'Digital Software',
            icon: faAppleAlt,
            path: '/'
        }
    ]
    const departmentItems = departmentsData.map(d => {
        return <li key={d.id}><FontAwesomeIcon className={classes.menuIcon} icon={d.icon} /><a href={d.path}>{d.title}</a></li>
    })
    return (
        <div onClick={() => setIsDepartmentsMenuOpenStatus(!isDepartmentsMenuOpen)} className={classes.departments}>
            <h3>Departments</h3>
            {isDepartmentsMenuOpen && <div className={classes.menu}>
                <ul className={classes.menuList}>
                    {departmentItems}
                </ul>
            </div>}
            <FontAwesomeIcon className={classes.barsIcon} icon={faBars} />
        </div>
    )
}

export default Departments