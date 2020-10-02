import React from 'react'
import star from '../images/Rating/star.png'
import greyStar from '../images/Rating/greyStar.png'

export function countRating(rating) {
    const starsCount = []
    const greyStarsCount = []
    const greyStars = 5 - rating
    for(let i = 1; i<=rating; i++) {
        starsCount.push(<img key={i} src={star} alt="" />)
    }
    for(let k = 1; k<=greyStars; k++) {
        greyStarsCount.push(<img key={k} src={greyStar} alt="" />)
    }
    return {
        starsCount,
        greyStarsCount
    }
} 