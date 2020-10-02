import React from 'react'
import classes from './sidebarSaleBanner.module.scss'

const SidebarSaleBanner = ({ saleBanners }) => {
    const products = saleBanners.map(item => {
        return (
            <div key={item.id} className={classes.sidebarSaleBanner}>
                <img className={classes.product_photo} src={item.photo} alt="" />
                <div className={classes.product_inf}>
                    <div className={classes.title}>
                        <h4>{item.title}</h4>
                    </div>
                    <div className={classes.subtitle}>
                        <p>{item.subtitle}</p>
                    </div>
                    <div className={classes.btn_shopNow}>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        )
    })
    return products
}

export default SidebarSaleBanner