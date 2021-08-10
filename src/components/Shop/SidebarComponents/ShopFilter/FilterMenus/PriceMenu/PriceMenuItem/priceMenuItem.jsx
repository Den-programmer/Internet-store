import React from 'react'
import '../../../FilterMenus/filterMenus.scss'

const PriceMenuItem = ({ id, price, changePriceFilter }) => {
    const priceCheckout = price < 50 ? 'Under $50' :
     price < 100 ? '$50 - $100' :
      price < 200 ? '$100 - $200' :
       price < 500 ? '$200 - $500' :
        'Over $500'
    const priceHandler = (e) => {
        const currentPrice = Number(e.currentTarget.getAttribute("id"))
        changePriceFilter(currentPrice)
    }    
    return (
        <div className="priceMenuItem">
            <input id={price} className="priceMenuItem__checkbox" onChange={priceHandler} name="price" type="radio"/>
            <p className="priceMenuItem__text">{priceCheckout}</p>
        </div>
    )
}

export default PriceMenuItem