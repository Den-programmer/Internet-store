import React from 'react'
import classes from './products.module.scss'
import pclasses from './../../common/Paginator/paginator.module.scss'
import { countRating } from '../../../utils/function-helpers'
import Product from './product/product'
import ShopSidebar from '../SidebarComponents/ShopSidebar/shopSidebar'
import ReactPaginate from 'react-paginate'

const Products = React.memo(({ products, productsPortion, productsPerRow, isSidebarShown,
    setProductId, changeProductHoveredStatus, unsetProductAsHovered, totalItemsCount, currentPage,
    changePage
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
            productsPerRow={productsPerRow} setProductId={setProductId} />
    })
    const startProductsPortion = currentPage === 1 ? 0 : (productsPortion + 1) * (currentPage - 1)
    const currentProductsPortion = currentPage * productsPortion
    const productsToShow = []                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    for (let i = startProductsPortion; i <= currentProductsPortion; i++) {
        productsToShow.push(productsData[i - 1])
    }
    const pagesCount = Math.ceil(totalItemsCount / productsPortion)
    const forcePage = currentPage - 1
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
            <ReactPaginate
                breakLabel={'...'}
                disabledClassName={pclasses.disabledClassName}
                previousClassName={pclasses.previous}
                nextClassName={pclasses.next}
                pageCount={pagesCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={4}
                forcePage={forcePage}
                onPageChange={(e) => changePage(e.selected + 1)}
                containerClassName={pclasses.paginator}
                activeClassName={pclasses.btn_pageActive}
                pageClassName={pclasses.btn_page}
            />
        </section>
    )
})

export default Products                                                                                         