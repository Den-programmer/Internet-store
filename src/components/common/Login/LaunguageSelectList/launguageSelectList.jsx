import React from 'react'
import classes from './launguageSelectList.module.scss'
import { changeLanguage } from '../../../../index'

const LaunguageSelectList = ({ setLanguage, languages }) => {
    const listItems = languages.map(item => {
        const checkout = item.isActive ? classes.activeListItem : classes.listItem
        const handleClick = () => {
            changeLanguage(item.tag)
            setLanguage(item.name, item.id)
        }
        return <li key={item.id} onClick={handleClick} className={checkout}>{item.name}</li>
    })
    return (
        <div className={classes.selectList}>
            <ul className={classes.list}>
                {listItems}
            </ul>
        </div>
    )
}

export default LaunguageSelectList