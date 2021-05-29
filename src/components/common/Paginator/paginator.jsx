import React from 'react'
import classes from './paginator.module.scss'

const Paginator = ({ totalItemsCount, pageSize, currentPage, changePage }) => {
    debugger
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pagesLeft = totalItemsCount % pageSize
    const pagesCountData = pagesCount + pagesLeft
    const pagesToShow = pagesCountData.map(item => {
        const checkoutClass = currentPage ? classes.btn_pageActive : classes.btn_page
        return (
            <div key={item} className={classes.btn_pageWrapper}>
                <button onClick={() => changePage(item)} className={checkoutClass}>{item}</button>
            </div>
        )
    })
    return (
        <div className={classes.paginator}>
            {pagesToShow} 
            <div className={classes.btn_pageWrapper}>
                <button className={classes.btn_page}>&#62;</button>
            </div>
        </div>
    )
}

export default Paginator