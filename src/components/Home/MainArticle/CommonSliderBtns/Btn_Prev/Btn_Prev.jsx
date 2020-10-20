import React from 'react'
import classes from './Btn_Prev.module.scss'

const Btn_Prev = (props) => {
    return <div onClick={props.click} className={classes.prev_btn}>&#60;</div>
}

export default Btn_Prev