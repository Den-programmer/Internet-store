import React from 'react'
import classes from './headerPageName.module.scss'

const HeaderPageName = ({ currentPageName, currentPath }) => {
    return (
        <div className={classes.pageNameWrapper}>
            <div className={classes.pageName}>
                <div className={classes.pageName__Title}>
                    <h2>{currentPageName}</h2>
                </div>
                <div className={classes.pageName__path}>
                    <h3>{currentPath}</h3>
                </div>
            </div>
        </div>
    )
}

export default HeaderPageName