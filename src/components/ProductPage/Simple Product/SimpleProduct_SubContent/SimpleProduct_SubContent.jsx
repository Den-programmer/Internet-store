import React from 'react'
import classes from './SimpleProduct_SubContent.module.scss'
import SubContent_Menu from './SubContent_Menu/SubContent_MenuContainer'
import SubContent from './SubContent/SubContentContainer'

const SimpleProduct_SubContent = ({ currentProduct }) => {
    return (
        <div className={classes.simpleProduct__subContent}>
            <SubContent_Menu />
            <SubContent currentProduct={currentProduct}/>
        </div>
    )
}

export default SimpleProduct_SubContent