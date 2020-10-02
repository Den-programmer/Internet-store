import React from 'react'
import classes from './banner.module.scss'

const Banner = ({ id, photo, title, subtitle }) => {
    return (
        <div id={id} className={classes.banner}>
            <img className={classes.banner__photo} src={photo} alt="" />
            <div className={classes.banner__content}>
                <h4 className={classes.banner__title}>{title}</h4>
                <p className={classes.banner__subtitle}>{subtitle}</p>
                <div className={classes.btn_todayOnly}>
                    <button>
                        Today Only!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner