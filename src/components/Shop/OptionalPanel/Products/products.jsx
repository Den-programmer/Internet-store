 import React from 'react'
import classes from './products.module.scss'
import ProductStandart from '../../common/productStandart/productStandart'
import { countRating } from '../../../utils/function-helpers'

const Products = ({ popularProducts, onPopularProductMove, removePopularProductsHoveredStatus }) => {
    const products = popularProducts.map(item => {
        const data = countRating(item.rating)
        const { starsCount, greyStarsCount } = data
        return <ProductStandart key={item.id} id={item.id}
            title={item.title}
            photo={item.photo}
            price={item.price}
            isNew={item.isNew}
            isSale={item.isSale}
            hovered={item.hovered}
            like={item.like} 
            starsCount={starsCount}
            greyStarsCount={greyStarsCount}
            onMouseMove={onPopularProductMove} 
            onMouseLeave={removePopularProductsHoveredStatus}
            likeProduct={() => null}
            removeLike={() => null}/>
    })
    return (
        <section className={classes.products}>
            <div className={classes.productsContent}>
                {products}
            </div>
            <div className={classes.paginator}>
                <div className={classes.btn_page}>
                    <button>1</button>
                </div>
                <div className={classes.btn_page}>
                    <button>2</button>
                </div>
                <div className={classes.btn_page}>
                    <button>3</button>
                </div>
                <div className={classes.btn_page}>
                    <button>&#62;</button>
                </div>
            </div>
        </section>
    )
}

export default Products