import React from 'react'
import classes from './SubContent.module.scss'
import SimpleProduct__Description from './SimpleProduct__Description/SimpleProduct__Description'
import CustomerReview from './CustomerReview/CustomerReview'
import AdditionalProductInformation from './AdditionalProductInformation/AdditionalProductInformation'

const SubContent = ({ menuItemChosenId, comments, addComment, authorName, setTextError, error, currentProduct }) => {
    const user = { name: authorName }
    return (
        <div className={classes.content}>
            {menuItemChosenId === 1 ? <SimpleProduct__Description description={currentProduct.description} title={currentProduct.title}/> 
            : menuItemChosenId === 2 ? <CustomerReview comments={comments} user={user} addComment={addComment} setTextError={setTextError} error={error}/> 
            : <AdditionalProductInformation currentProduct={currentProduct}/>}
        </div>
    )
}

export default SubContent