import React from 'react'
import classes from './slider.module.scss'
import BtnShopNow from '../../../common/btns/shopNow/shopNow'

const Slider = ({ slider, changeSliderPage, chooseSliderItem }) => {
    const switchBtns = slider.sliderItems.map(item => {
        const chooseSliderElement = () => {
            chooseSliderItem(item.id)
            changeSliderPage(item.id)
        }
        return <div key={item.id} onClick={chooseSliderElement} className={slider.sliderItems[item.id - 1].isShown ? classes.activeBtn : classes.switchBtn}></div>
    })
    const products = slider.sliderItems.map(item => {
        return (
            <div className={classes.slide}>
                <img className={classes.slideImage} src={item.itemPhoto} alt="" />
                <div className={classes.description}>
                    <h2 className={classes.description__title}>{item.title}</h2>
                    <p className={classes.description__subtitle}>{item.subtitle}</p>
                    <BtnShopNow click={null}/>
                    <div className={classes.switchBtnsControl}>
                        {switchBtns}
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className={classes.slider}>
            {products[slider.currentPage - 1]}
        </div>
    )
}

export default Slider