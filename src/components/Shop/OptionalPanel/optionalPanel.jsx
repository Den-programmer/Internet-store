import React from 'react'
import classes from './optionalPanel.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faTh, faList } from '@fortawesome/free-solid-svg-icons'

const OptionalPanel = (props) => {
    return (
        <section className={classes.optionalPanel}>
            <div className={classes.showing_title}>
                <h3>Showing 1-16 of 24 Products</h3>
            </div>
            <div className={classes.options}>
                <div className={classes.productsCount}>
                    <p>16</p><FontAwesomeIcon className={classes.iconAngleDown} icon={faAngleDown}/>
                </div>
                <div className={classes.sort}>
                    <p>Default Sorting</p><FontAwesomeIcon className={classes.iconAngleDown} icon={faAngleDown}/>
                </div>
                <div className={classes.contentConvenience}>
                    <div><FontAwesomeIcon className={classes.optionIcons} icon={faTh}/></div>
                    <div><FontAwesomeIcon className={classes.optionIcons} icon={faList}/></div>
                </div>
            </div>
        </section>
    )
}

export default OptionalPanel