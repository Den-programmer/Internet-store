import React from 'react'
import classes from './optionalPanel.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faTh, faList } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

const OptionalPanel = ({ productsPortion, changeProductsPortion, productsPerRow, productsCountMenu, changeSidebarShownStatus, openProductsPortionOptionList, isPortionListOpen }) => {
    const { t } = useTranslation()

    const setProductsPortion = (portion) => {
        openProductsPortionOptionList(!isPortionListOpen)
        changeProductsPortion(portion)
    }

    const menuRef = React.createRef()

    document.addEventListener('click', e => {
        if (menuRef.current && !menuRef.current.contains(e.target)) openProductsPortionOptionList(false)
    })

    const countItemsMenu = productsCountMenu.map(item => {
        const activeStyle = item.productsPerRow === productsPerRow ? { order: 1 } : {  } 
        return (
            <div style={activeStyle} key={item.id} onClick={() => setProductsPortion(item.portion)} className={classes.productsCount}>
                <p>{item.portion}</p><FontAwesomeIcon className={classes.iconAngleDown} icon={faAngleDown} />
            </div>
        )
    })
    return (
        <section className={classes.optionalPanel}>
            <div className={classes.showing_title}>
                <h3>{t("showing")} 1-16 {t("of")} 24 {t("from_products")}</h3>
            </div>
            <div className={classes.options}>
                <div className={classes.productsCountMenuWrapper}>
                    <div ref={menuRef} className={classes.productsCountMenu}>
                        {!isPortionListOpen && <div onClick={() => setProductsPortion(productsPortion)} className={classes.productsCount}>
                            <p>{productsPortion}</p><FontAwesomeIcon className={classes.iconAngleDown} icon={faAngleDown} />
                        </div>}
                        {isPortionListOpen && countItemsMenu}
                    </div>
                </div>
                <div className={classes.sort}>
                    <p>{t("default_sorting")}</p><FontAwesomeIcon className={classes.iconAngleDown} icon={faAngleDown} />
                </div>
                <div className={classes.contentConvenience}>
                    <div onClick={() => changeSidebarShownStatus(false)}><FontAwesomeIcon className={classes.optionIcons} icon={faTh} /></div>
                    <div onClick={() => changeSidebarShownStatus(true)}><FontAwesomeIcon className={classes.optionIcons} icon={faList} /></div>
                </div>
            </div>
        </section>
    )
}

export default OptionalPanel