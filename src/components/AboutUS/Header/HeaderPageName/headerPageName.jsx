import React from 'react'
import classes from './headerPageName.module.scss'

const HeaderPageName = (props) => {
    return (
        <div className={classes.pageNameWrapper}>
            <div className={classes.pageName}>
                <div className={classes.pageName__Title}>
                    <h2>About Us</h2>
                </div>
                <div className={classes.pageName__path}>
                    <h3>Home/About US</h3>
                </div>
            </div>
        </div>
    )
}

export default HeaderPageName