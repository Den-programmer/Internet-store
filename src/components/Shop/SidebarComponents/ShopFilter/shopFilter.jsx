import React from 'react'
import classes from './shopFilter.module.scss'
import FilterItem from './FilterItem/filterItem'
import { useTranslation } from 'react-i18next'

const ShopFilter = ({ shopFilters, openShopFiltersMenu, changePriceFilter, setColorFilter, productsPortion }) => {
    const { t } = useTranslation()
    const filters = shopFilters.map(item => {
        return <FilterItem openShopFiltersMenu={openShopFiltersMenu} key={item.id} id={item.id} title={item.title} isOptionOpen={item.isOptionOpen} 
        changePriceFilter={changePriceFilter} setColorFilter={setColorFilter}/>
    })
    return (
        <div className={classes.shopFilter}>
            <div className={classes.title}>
                <h3 style={productsPortion === 10 ? { textAlign: 'center' } : {}}>{t("filter_by")}</h3>
            </div>
            <div className={classes.filters}>
                {filters}
            </div>
        </div>
    )
}

export default ShopFilter