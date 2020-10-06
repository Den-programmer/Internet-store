import React from 'react'
import classes from './bannerComponent.module.scss'

const BannerComponent = ({ id, photo, title, subtitle, buttonText, widthPhoto, heightPhoto }) => {
    const style = {
        width: widthPhoto,
        height: heightPhoto
    }
    return (
        <div id={id} className={classes.banner}>
            <img style={style} className={classes.banner__photo} src={photo} alt="" />
            <div className={classes.bannerInf}>
                <h3 className={classes.bannerInf__title}>{title}</h3>
                <p className={classes.bannerInf__subtitle}>{subtitle}</p>
                <div className={classes.btn_specialOffer}>
                    <button>{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default BannerComponent