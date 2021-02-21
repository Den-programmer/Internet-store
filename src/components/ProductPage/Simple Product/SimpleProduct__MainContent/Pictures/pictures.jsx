import React, { useState } from 'react'
import classes from './pictures.module.scss'

const Pictures = ({ currentProduct }) => {
    const [index, setIndex] = useState(0)
    const picturesData = currentProduct.photos.map((item, index) => {
        return <img onClick={() => setIndex(index)} key={index} src={item} alt="" />
    })
    const pictures = picturesData.filter((item, i) => index !== i && true)
    return (
        <div className={classes.pictures}>
            <div className={classes.mainPhoto}>
                <img src={currentProduct.photos[index]} alt="" />
            </div>
            <div className={classes.photoList}>
                {pictures.length !== 0 && pictures}
            </div>
        </div>
    )
}

export default Pictures