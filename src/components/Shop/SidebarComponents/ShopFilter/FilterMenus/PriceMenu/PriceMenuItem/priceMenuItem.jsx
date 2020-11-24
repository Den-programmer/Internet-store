import React from 'react'
import '../../../FilterMenus/filterMenus.scss'

const PriceMenuItem = ({ price }) => {
    const priceCheckout = price < 50 ? 'Under $50' :
     price < 100 ? '$50 - $100' :
      price < 200 ? '$100 - $200' :
       price < 500 ? '$200 - $500' :
        'Over 500'
    return (
        <div className="priceMenuItem">
            <input className="priceMenuItem__checkbox" type="checkbox"/>
            <p className="priceMenuItem__text">{priceCheckout}</p>
        </div>
    )
}

export default PriceMenuItem