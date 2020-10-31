import React from 'react'
import classes from './currentList.module.scss'
import Product from './Product/product'
import sadSmile from '../../../images/Smiles/sadSmile.jpg'
import { NavLink } from 'react-router-dom'

const CurrentList = ({ products, deleteFromWishlist }) => {
    const Products = products.map(product => {
        return <Product key={product.id} id={product.id} 
        title={product.title} 
        photo={product.photo}
        price={product.price}
        rating={product.rating}
        isNew={product.isNew}
        isSale={product.isSale}
        hovered={product.hovered}
        like={product.like}
        isInCard={product.isInCard}
        isInStock={product.isInStock}
        isCompare={product.isCompare}
        deleteFromWishlist={deleteFromWishlist}/>
    })
    return (
        <div className={classes.currentList}>
            <div className={classes.title}>
                <h3>Wishlist</h3>
            </div>
            <div className={classes.productContainer}>
                <div className={classes.controls}>
                    <div className={classes.title}>
                        <h5>Product</h5>
                    </div>
                    <div className={classes.price}>
                        <h5>Price</h5>
                    </div>
                    <div className={classes.stockStatus}>
                        <h5>Stock Status</h5>
                    </div>
                </div>
                {products.length !== 0 ? <div className={classes.products}>
                    {Products}
                </div> : <div className={classes.noProducts}>
                    <img className={classes.sadSmile} src={sadSmile} alt=""/>
                    <h4>To add here some products go to the <NavLink to="/Home/Shop">shop page</NavLink>!</h4>
                </div>}
            </div>
        </div>
    )
}

export default CurrentList