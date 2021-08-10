import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from './blogArticle.module.scss'

const BlogArticle = ({ news }) => {
    const { t } = useTranslation()
    const News = news.map(item => {
        return (
            <div key={item.id} className={classes.news}>
                <img className={classes.news__photo} src={item.photo} alt="" />
                <div className={classes.news__content}>
                    <div className={classes.news__content_header}>
                        <div className={classes.dateWrapper}>
                            <div className={classes.date}>
                                <p className={classes.day}>{item.date.day}</p>
                                <p className={classes.month}>{item.date.month}</p>
                            </div>
                        </div>
                        <div className={classes.news__title__block}>
                            <h3>{item.title}</h3>
                            <div className={classes.news__additional_inf}>
                                <div className={classes.additional_inf_item}>{item.tag}</div>
                                <div className={classes.additional_inf_item}>|</div>
                                <div className={classes.additional_inf_item}>{item.comments.length !== 0 ? t("Comments") + item.comments.length : t("noComments")}</div>
                                <div className={classes.additional_inf_item}>|</div>
                                <div className={classes.additional_inf_item}>{item.authour}</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.news__mainContent}>
                        <div className={classes.horizontal_line}></div>
                        <p>{item.subtitle}</p>
                        <a className={classes.continue_reading} href="/">{t("continue_reading")}</a>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className={classes.blogArticle}>
            <div className={classes.newsWrapper}>
                {News}
            </div>
            <div className={classes.horizontal_line_2}></div>
            <div className={classes.paginator}>
                <div className={classes.btn_page}>
                    <button>1</button>
                </div>
                <div className={classes.btn_page}>
                    <button>2</button>
                </div>
                <div className={classes.btn_page}>
                    <button>&#62;</button>
                </div>
            </div>
        </div>
    )
}

export default BlogArticle