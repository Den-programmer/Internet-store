import React from 'react'
import classes from './NewProducts.module.scss'
import NewProduct from './newProduct/newProduct'
import { useTranslation } from 'react-i18next'

const NewProducts = ({ newProducts, setProductId, addToCart }) => {
    const { t } = useTranslation()
    const products = newProducts.map(item => {
        return <NewProduct key={item.id} id={item.id} photo={item.photo} title={item.title} price={item.price} rating={item.rating}
        isNew={item.isNew} isSale={item.isSale} hovered={item.hovered} like={item.like} isInCart={item.isInCart} isInStock={item.isInStock}
        isCompare={item.isCompare} setProductId={setProductId} addToCart={addToCart}/>
    })
    return (
        <div className={classes.newProducts}>
            <div className={classes.title}>
                <h2>{t("new_products")}</h2>
            </div>
            <div className={classes.products}>
                {products}
            </div>
        </div>
    )
}

export default NewProducts