import React from 'react'
import classes from './mainHeader.module.scss'
import CommonMainHeaderContainer from '../../../common/CommonMainHeader/commonMainHeaderContainer'


const MainHeader = (props) => {
    return (
        <div className={classes.mainHeaderWrapper}>
            <CommonMainHeaderContainer />
        </div>
    )
}

export default MainHeader