import React from 'react'
import classes from './additionalBanners.module.scss'
import BannerComponent from '../../../common/BannerComponent/bannerComponent'

const AdditionalBanners = ({ banners }) => {
    const products = banners.map(b => <BannerComponent key={b.id} id={b.id} 
        photo={b.photo} 
        title={b.title} 
        subtitle={b.subtitle}
        buttonText={"Special Offer!"} 
        widthPhoto={"360px"} heightPhoto={"210px"}/>)
    return (
        <div className={classes.additionalBanners}>
            {products}
        </div>
    )
}

export default AdditionalBanners