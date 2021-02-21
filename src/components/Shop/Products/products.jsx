import React from 'react'
import classes from './products.module.scss'
import { countRating } from '../../../utils/function-helpers'
import Product from './product/product'
import ShopSidebar from '../SidebarComponents/ShopSidebar/shopSidebar'

const Products = ({ products, productsPortion, productsPerRow, isSidebarShown, 
    setProductId, changeProductHoveredStatus, unsetProductAsHovered
 }) => {
    const wdthFiveProductsToShow = { width: '100%', justifyContent: 'center' }
    const wdthFourProductsToShow = { width: '100%', justifyContent: 'left' }
    const wdthOneProductToShow = { flexDirection: 'column' }
    const mainWidthStyle = productsPerRow === 5 ? wdthFiveProductsToShow : productsPerRow === 4 ? wdthFourProductsToShow : wdthOneProductToShow
    
    const productsData = products.map(item => {
        const data = countRating(item.rating)
        const { starsCount, greyStarsCount } = data
        return <Product key={item.id} id={item.id}
            title={item.title}
            photos={item.photos}
            price={item.price}
            isNew={item.isNew}
            isSale={item.isSale}
            hovered={item.hovered}
            like={item.like}
            starsCount={starsCount}
            onMouseMove={changeProductHoveredStatus}
            onMouseLeave={unsetProductAsHovered}
            greyStarsCount={greyStarsCount}
            likeProduct={() => null}
            removeLike={() => null}
            isInCart={item.isInCart}
            isInStock={item.isInStock}
            isCompare={item.isCompare} 
            productsPerRow={productsPerRow} setProductId={setProductId}/>
    })
    const productsToShow = []
    for (let i = 1; i <= productsPortion; i++) {
        productsToShow.push(productsData[i - 1])
    }
    return (
        <section className={classes.products}>
            <div className={classes.products_mainContent}>
                <div style={mainWidthStyle} className={classes.productsContent}>
                    {productsToShow}
                </div>
                {isSidebarShown && <div className={classes.sidebar}>
                    <ShopSidebar />
                </div>}
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