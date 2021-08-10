import React from 'react'
import classes from './blogCategories.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

const BlogCategories = ({ categories }) => {
    const { t } = useTranslation()
    const Categories = categories.map(item => {
        return <li key={item.id} className={classes.categoriesItem}><a href="/">{t(item.title)}</a></li>
    })
    return (
        <section className={classes.blogCategories}>
            <div className={classes.categoriesSearch}>
                <input type="text" placeholder={t("search")} />
                <div className={classes.searchIcon}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
            <div className={classes.categories}>
                <div className={classes.title}>
                    <h4>{t("categories")}</h4>
                </div>
                <ul className={classes.mainContent}>
                    {Categories}
                </ul>
            </div>
        </section>
    )
}

export default BlogCategories