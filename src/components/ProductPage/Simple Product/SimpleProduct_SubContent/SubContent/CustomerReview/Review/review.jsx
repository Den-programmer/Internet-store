import React from 'react'
import classes from './review.module.scss'

const Review = ({ photo, starsCount, greyStarsCount, authorName, date, text }) => {
    return (
        <div className={classes.review}>
            <div className={classes.photo}>
                <img src={photo} alt="" />
            </div>
            <div className={classes.reviewContent}>
                <div className={classes.reviewContent__header}>
                    <div className={classes.review_user_information}>
                        <h4 className={classes.reviewContent__header_nametitle}>{authorName} - </h4>
                        <p className={classes.reviewContent__header_date}>{date}</p>
                    </div>
                    <div className={classes.reviewRating}>
                        {starsCount}
                        {greyStarsCount}
                    </div>
                </div>
                <div className={classes.reviewContent__footer}>
                    <p className={classes.content__text}>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Review