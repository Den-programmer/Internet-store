import React from 'react'
import classes from './enormousBanner.module.scss'
import BtnShopNow from '../../../common/btns/shopNow/shopNow'

const EnormousBanner = ({ enormousBanner }) => {
    const products = enormousBanner.map(item => {
        return (
            <section key={item.id} className={classes.enomoursBanner}>
                <img className={classes.enomoursBanner__photo} src={item.photo} alt="" />
                <div className={classes.enormousBanner__content}>
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                    <BtnShopNow click={null}/>
                </div>
            </section>
        )
    })
    return products 
}

export default EnormousBanner