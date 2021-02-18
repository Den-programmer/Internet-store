import React from 'react'
import classes from './CustomerReview.module.scss'
import Review from './Review/review'
import { countRating } from '../../../../../../utils/function-helpers'
import { useState } from 'react'

const CustomerReview = ({ comments, addComment, user, setTextError, error }) => {
    const [comment, setCommentVal] = useState('')
    const data = countRating(user.rating)
    const { starsCount, greyStarsCount } = data
    const commentsItems = comments.map(item => {
        const data = countRating(item.rating)
        const { starsCount, greyStarsCount } = data
        return <Review key={item.id} id={item.id} 
        starsCount={starsCount} 
        greyStarsCount={greyStarsCount} 
        authorName={item.authorName} 
        date={item.date} 
        photo={item.authorPhoto}
        text={item.commentText}/>
    })
    const changeCommentValue = (e) => {
        setCommentVal(e.currentTarget.value)
        setTextError('')
    }
    const CommentHandler = () => {
        if(comment !== '') {
            addComment(comment, user.name, user.photo)
        } else {
            setTextError('Please enter your comment text!')
        }
    }
    const mark = <span className={classes.require_mark}>*</span>
    return (
        <div className={classes.customerReview}>
            <h3 className={classes.customerReview__title}>Reviews for.........</h3>
            <div className={classes.reviews}>{commentsItems}</div>
            <div className={classes.addReviewForm}>
                <h3 className={classes.title}>Add a Review</h3>
                <div className={classes.addReviewForm__item}>
                    <p className={classes.addReviewForm__text}>
                        Your email address will not be published. Required fields are marked
                </p> {mark}
                </div>
                <div className={classes.form}>
                    <div className={classes.addReviewForm__item}>
                        <p className={classes.addReviewForm__text}>Your Rating</p>
                        <div className={classes.user_rating_content}>
                            {starsCount}
                            {greyStarsCount}
                        </div>
                    </div>
                    <div className={classes.addReviewForm__item}>
                        <p className={classes.addReviewForm__text}>Your Review {mark}</p>
                        <textarea onChange={changeCommentValue}/>
                    </div>
                    {error !== '' && <div className={classes.error}>
                        <span className={classes.errorText}>{error}</span>
                    </div>}
                    <div className={classes.btn_submit}>
                        <button onClick={CommentHandler}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview