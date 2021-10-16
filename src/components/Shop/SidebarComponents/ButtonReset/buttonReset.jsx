import React from 'react'
import '../ShopFilter/FilterMenus/filterMenus.scss'

const ResetBtn = ({ func }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '10px' }}>
            <button onClick={() => func(0)} className="priceMenu__resetButton">
                Reset
            </button>
        </div>
    )
}

export default ResetBtn