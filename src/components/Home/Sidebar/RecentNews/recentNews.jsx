import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from './recentNews.module.scss'

const RecentNews = ({ news, newsShown, changeNews }) => {
    const { t } = useTranslation()
    const News = news.map(n => {
        const clickPrev = () => changeNews(n.id - 1)
        const clickNext = () => changeNews(n.id + 1)
        return (<div className={classes.newsItemsWrapper} key={n.id}>
            <div className={classes.control}>
                <div className={classes.title}>
                    <h2>{t("recent_news")}</h2>
                </div>
                <div className={classes.control_btns}>
                    <div onClick={clickPrev} className={classes.bnt_prev}><button>&#60;</button></div>
                    <div onClick={clickNext} className={classes.btn_next}><button>&#62;</button></div>
                </div>
            </div>
            <div className={classes.mainPartWrapper}>
                <div className={classes.mainPart}>
                    <div className={classes.news_Photo}>
                        <img src={n.photo} alt="" />
                    </div>
                    <div className={classes.dateWrapper}>
                        <div className={classes.date}>
                            <p className={classes.day}>{n.date.day}</p>
                            <p className={classes.month}>{n.date.month}</p>
                        </div>
                    </div>
                    <div className={classes.news}>
                        <h5 className={classes.news_title}>{n.title}</h5>
                        <div className={classes.theme}>
                            <p>{n.tag}</p>
                            <div className={classes.vertical_line}>|</div>
                            <p>{n.commentsCount === 0 ? t("noComments") : `${t("comments")}: ` + n.commentsCount}</p>
                        </div>
                        <p className={classes.news_text}>{n.text}</p>
                        <div className={classes.continueReading}>
                            <a href={n.url}>{t("continue_reading")}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    })
    return (
        <div className={classes.recentNews}>
            {News[newsShown - 1]}
        </div>
    )
}

export default RecentNews