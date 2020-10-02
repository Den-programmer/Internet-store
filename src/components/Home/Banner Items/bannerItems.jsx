import React from 'react'
import classes from './bannerItems.module.scss'
import Slider from './slider/slider'
import AdditionalBanners from './AdditionalBanners/additionalBanners'

const BannerItems = (props) => {
    return (
        <section className={classes.bannerItems}>
            <Slider slider={props.slider} changeSliderPage={props.changeSliderPage} chooseSliderItem={props.chooseSliderItem}/>
            <AdditionalBanners banners={props.banners}/>
        </section>
    )
}

export default BannerItems