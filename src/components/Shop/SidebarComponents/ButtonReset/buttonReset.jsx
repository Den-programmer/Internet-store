import React from 'react'
import '../ShopFilter/FilterMenus/filterMenus.scss'

const ResetBtn = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '10px' }}>
            <button className="priceMenu__resetButton">
                Reset
            </button>
        </div>
    )
}

export default ResetBtn