import React from 'react'
import classes from './pageTitle.module.scss'

const PageTitle = ({ currentPath, currentShopPage }) => {
    return (
        <section className={classes.pageTitle}>
            <div className={classes.title}>
                <h2>{currentShopPage}</h2>
            </div>
            <div className={classes.pathName}>
                <h3>{currentPath}/{currentShopPage}</h3>
            </div>
        </section>
    )
}

export default PageTitle