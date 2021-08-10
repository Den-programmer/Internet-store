import React from 'react'
import classes from './currentList.module.scss'
import Product from './Product/product'
import sadSmile from '../../../images/Smiles/sadSmile.jpg'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const CurrentList = ({ products, addToCart, removeLike }) => {
    const { t } = useTranslation()
    const Products = products.map(product => {
        return <Product key={product.id} id={product.id} 
        title={product.title} 
        photos={product.photos}
        price={product.price}
        rating={product.rating}
        isNew={product.isNew}
        isSale={product.isSale}
        hovered={product.hovered}
        like={product.like}
        isInCard={product.isInCard}
        isInStock={product.isInStock}
        isCompare={product.isCompare}
        addToCart={addToCart}
        removeLike={removeLike}/>
    })
    return (
        <div className={classes.currentList}>
            <div className={classes.title}>
                <h3>{t("wishlist")}</h3>
            </div>
            <div className={classes.productContainer}>
                <div className={classes.controls}>
                    <div className={classes.title}>
                        <h5>{t("product")}</h5>
                    </div>
                    <div className={classes.price}>
                        <h5>{t("price")}</h5>
                    </div>
                    <div className={classes.stockStatus}>
                        <h5>{t("stock_status")}</h5>
                    </div>
                </div>
                {products.length !== 0 ? <div className={classes.products}>
                    {Products}
                </div> : <div className={classes.noProducts}>
                    <img className={classes.sadSmile} src={sadSmile} alt=""/>
                    <h4>{t("to_add_products_go_to_the")} <NavLink to="/Home/Shop">{t("shop_page_wishlist")}</NavLink>!</h4>
                </div>}
            </div>
        </div>
    )
}

export default CurrentList