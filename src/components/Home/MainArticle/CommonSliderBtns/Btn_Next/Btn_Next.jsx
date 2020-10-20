import React from 'react'
import classes from './Btn_Next.module.scss'

const Btn_Next = (props) => {
    return  <div onClick={props.click} className={classes.next_btn}>&#62;</div>
}

export default Btn_Next