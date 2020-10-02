import React from 'react'
import classes from './banners.module.scss'
import BtnShopNow from '../../../common/btns/shopNow/shopNow'

const Banners = ({ banners }) => {
    const products = banners.map(b => {
        return (
            <div key={b.id} className={classes.banner}>
                <img className={classes.banner__photo} src={b.photo} alt="" />
                <div className={classes.bannerInformation}>
                    <h3>{b.title}</h3>
                    <p>{b.subtitle}</p>
                    <BtnShopNow click={null} />
                </div>
            </div>
        )
    })
    return (
        <section className={classes.banners}>{products}</section>
    )    
}

export default Banners