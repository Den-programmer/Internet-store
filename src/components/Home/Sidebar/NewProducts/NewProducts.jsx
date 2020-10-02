import React from 'react'
import classes from './NewProducts.module.scss'
import NewProduct from './newProduct/newProduct'

const NewProducts = ({ newProducts }) => {
    const products = newProducts.map(item => {
        return <NewProduct key={item.id} photo={item.photo} title={item.title} price={item.price} rating={item.rating}/>
    })
    return (
        <div className={classes.newProducts}>
            <div className={classes.title}>
                <h2>New Products</h2>
            </div>
            <div className={classes.products}>
                {products}
            </div>
        </div>
    )
}

export default NewProducts