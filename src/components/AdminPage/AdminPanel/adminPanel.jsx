import React, { useState } from 'react'
import classes from './adminPanel.module.scss'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const AdminPanel = (props) => {
    const [navigationItems, setNavigationItems] = useState([
        {
            id: 1,
            isActive: true,
            title: 'Products',
            url: "/AdminPage/Products"
        },
        {
            id: 2,
            isActive: false,
            title: 'Stats',
            url: "/AdminPage/Stats"
        }
    ])

    const navigationNodes = navigationItems.map(item => {
        const listItemClickHandler = (itemId) => {
            setNavigationItems(navigationItems.map(item => {
                if(itemId === item.id) return { ...item, isActive: true }
                return { ...item, isActive: false }
            }))
        }
        return <li key={item.id} onClick={() => listItemClickHandler(item.id)} className={item.isActive ? classes.listItemActive : classes.listItem}>
            <NavLink className={classes.listLink} to={item.url}>{item.title}</NavLink>
        </li >
    })

    return (
        <div className={classes.adminPanel}>
            <div className={classes.header}>
                <h2>Admin Page</h2>
            </div>
            <div className={classes.panel}>
                <div className={classes.horizontal_line}></div>
                <nav className={classes.nav}>
                    <ul className={classes.list}>
                        {navigationNodes}
                    </ul>
                </nav>
                <div className={classes.horizontal_line}></div>
            </div>
        </div>
    )
}

export default AdminPanel 