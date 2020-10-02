import React from 'react'
import classes from './banner.module.scss'

const Banner = ({ photo, title, subtitle }) => {
    return (
        <div className={classes.banner}>
            <img className={classes.banner__photo} src={photo} alt="" />
            <div className={classes.bannerInf}>
                <h3 className={classes.bannerInf__title}>{title}</h3>
                <p className={classes.bannerInf__subtitle}>{subtitle}</p>
                <div className={classes.btn_specialOffer}>
                    <button>Special Offer!</button>
                </div>
            </div>
        </div>
    )
}

export default Banner