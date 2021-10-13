import React from 'react'
import classes from './products.module.scss'
import pclasses from './../../common/Paginator/paginator.module.scss'
import { countRating } from '../../../utils/function-helpers'
import Product from './product/product'
import ShopSidebar from '../SidebarComponents/ShopSidebar/shopSidebar'
import ReactPaginate from 'react-paginate'
import { useTranslation } from 'react-i18next'

const Products = React.memo(({ products, productsPortion, productsPerRow, isSidebarShown,
    setProductId, changeProductHoveredStatus, unsetProductAsHovered, totalItemsCount, currentPage,
    changePage, priceFilter, colorFilter, searchText
}) => {
    const { t } = useTranslation()
    debugger
    const wdthFiveProductsToShow = { width: '100%', justifyContent: 'center' }
    const wdthFourProductsToShow = { width: '100%', justifyContent: 'left' }
    const wdthOneProductToShow = { flexDirection: 'column' }
    const mainWidthStyle = productsPerRow === 5 ? wdthFiveProductsToShow : productsPerRow === 4 ? wdthFourProductsToShow : wdthOneProductToShow
    const productsCreation = (productsData) => {
        return productsData.map(item => {
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
                productsPerRow={productsPerRow} 
                productsPortion={productsPortion}
                setProductId={setProductId} />
        })
    }

    const startProductsPortion = currentPage === 1 ? 0 : (productsPortion + 1) * (currentPage - 1)
    const currentProductsPortion = currentPage * productsPortion

    const productsDataRanged = products.filter(item => {
        if(item.id >= startProductsPortion && item.id <= currentProductsPortion) return true 
    })
    // const productsData = productsDataRanged.filter(item => {
    //     let color = ''
    //     item.properties.forEach(item => {
    //         if(item.title === 'Colour') color = item.value
    //         return color = ''
    //     })
    //     return colorFilter !== '' ? colorFilter === color  ? true : false : true
    // }) 

    const productsData = productsDataRanged.filter((item) => {
        if(searchText !== '') {
            if(item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1) return true
        } else {
            return true
        }
    })   

    const productsToShow = productsCreation(productsData)

    const pagesCount = Math.ceil(totalItemsCount / productsPortion)
    const forcePage = currentPage - 1
    return (
        <section className={classes.products}>
            <div className={classes.products_mainContent}>
                <div style={mainWidthStyle} className={classes.productsContent}>
                    {productsToShow.length !== 0 ? productsToShow : <h6 className={classes.nothingFound}>Nothing was found!</h6>}
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
                previousLabel={t("prev")}
                nextLabel={t("next")}
                onPageChange={(e) => changePage(e.selected + 1)}
                containerClassName={pclasses.paginator}
                activeClassName={pclasses.btn_pageActive}
                pageClassName={pclasses.btn_page}
            />
        </section>
    )
})

export default Products