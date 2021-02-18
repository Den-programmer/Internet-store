import React from 'react'
import classes from './simpleProduct.module.scss'
import SimpleProduct__MainContent from './SimpleProduct__MainContent/SimpleProduct__MainContent'
import SimpleProduct_SubContent from './SimpleProduct_SubContent/SimpleProduct_SubContent'

const SimpleProduct = (props) => {
    return (
        <div className={classes.simpleProduct}>
            <SimpleProduct__MainContent />
            <SimpleProduct_SubContent />
        </div>
    )
}

export default SimpleProduct