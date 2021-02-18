import React from 'react'
import classes from './SubContent_Menu.module.scss'

const SubContent_Menu = ({ menu, changeProductMenuItem, changeMenuItemChosenId }) => {
    const menuItems = menu.map(item => {
        const menuItemHandleClick = () => {
            changeProductMenuItem(item.id)
            changeMenuItemChosenId(item.id)
        }
        return <div key={item.id} onClick={menuItemHandleClick} className={classes.menuItemWrapper}>
            <div className={item.isChosen ? classes.active : classes.menuItem}><h3>{item.title}</h3></div>
        </div>
    })
    return (
        <div className={classes.menu}>
            {menuItems}
        </div>
    )
}

export default SubContent_Menu