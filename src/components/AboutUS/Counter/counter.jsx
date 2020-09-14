import React from 'react'
import classes from './counter.module.scss'

const Counter = (props) => {
    return (
        <section className={classes.countersWrapper}>
            <div className={classes.counters}>
                <div className={classes.counter}>
                    <h5>{props.totalEmployees}</h5>
                    <p>Total Employees</p>
                </div>
                <div className={classes.counter}>
                    <h5>{props.satisfaction}</h5>
                    <p>% Satisfaction</p>
                </div>
                <div className={classes.counter}>
                    <h5>{props.cupsOfCoffee}</h5>
                    <p>Cups of Coffee</p>
                </div>
                <div className={classes.counter}>
                    <h5>{props.buyersRating}</h5>
                    <p>Buyers Rating</p>
                </div>
            </div>
        </section>
    )
}

export default Counter