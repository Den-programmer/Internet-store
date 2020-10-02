import React from 'react'
import classes from './additionalBanners.module.scss'
import Banner from './Banner/banner'

const AdditionalBanners = ({ banners }) => {
    const products = banners.map(b => <Banner title={b.title} subtitle={b.subtitle} photo={b.photo} id={b.id} key={b.id}/>)
    return (
        <div className={classes.additionalBanners}>
            {products}
        </div>
    )
}

export default AdditionalBanners