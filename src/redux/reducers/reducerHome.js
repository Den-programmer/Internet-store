import sliderItem1 from '../../components/Home/Banner Items/slider/img/sliderItem1.jpg'
import sliderItem2 from '../../components/Home/Banner Items/slider/img/sliderItem2.jpg'
import sliderItem3 from '../../components/Home/Banner Items/slider/img/sliderItem3.jpg'
import templateBanner from '../../components/Home/Banner Items/AdditionalBanners/img/photo.jpg'

import appleWatch from '../../components/Home/Sidebar/Hot Deals/productsPhotos/appleWatch.png'
import blackTShirt from '../../components/Home/Sidebar/Hot Deals/productsPhotos/blackTShirt.jpg'
import macbookPro from '../../components/Home/Sidebar/Hot Deals/productsPhotos/macbookPro.png'
import phone_samsung_galaxy_note_20_ultra_8gb_256gb from '../../components/Home/Sidebar/Hot Deals/productsPhotos/phone-samsung-galaxy-note-20-ultra-8gb-256gb.png'

// Avatars!!


import avatar from '../../images/avatar.jpg'
import { faTv, faMobileAlt, faGem, faWallet, faGift, faHome, faPizzaSlice, faTshirt, faShoppingBag, faClock } from '@fortawesome/free-solid-svg-icons'


const CHANGE_SLIDER_PAGE = 'CHANGE_SLIDER_PAGE'
const CHOOSE_SLIDER_ITEM = 'CHOOSE_SLIDER_ITEM'

const CHANGE_HOT_DEALS_SLIDER_ITEM = 'CHANGE_HOT_DEALS_SLIDER_ITEM'

const CHOOSE_TESTIMONIAL = 'CHOOSE_TESTIMONIAL'
const CHANGE_SHOWN_TESTIMONIAL = 'CHANGE_SHOWN_TESTIMONIAL'

const CHANGE_NEWS = 'CHANGE_NEWS'

const HOT_DEALS_TIMER = 'HOT_DEALS_TIMER'


const HomeState = {
    slider: {
        sliderItems: [
            {
                id: 1,
                title: "Upto 50% Offer!",
                subtitle: "For all men's collection",
                itemPhoto: sliderItem1,
                isShown: true
            },
            {
                id: 2,
                title: "Upto 40% Offer!",
                subtitle: "For all men's collection",
                itemPhoto: sliderItem2,
                isShown: false
            },
            {
                id: 3,
                title: "Upto 70% Offer!",
                subtitle: "Beautiful comfortable smart watch mi",
                itemPhoto: sliderItem3,
                isShown: false
            }
        ],
        currentPage: 1
    },
    banners: [
        {
            id: 1,
            title: "Big Offer Day",
            subtitle: "Extra 25% Off",
            photo: templateBanner
        },
        {
            id: 2,
            title: "CANON eos",
            subtitle: "UPTO 30% FLAT OFFER!",
            photo: templateBanner
        },
        {
            id: 3,
            title: "Letv 920 Oneday sale",
            subtitle: "New Arrivals",
            photo: templateBanner
        }
    ],
    sidebar: {
        sliderItems: [
            {
                id: 1,
                title: "Apple Watch Pink",
                price: "445.00",
                photo: appleWatch,
                rating: 5,
                isNew: false,
                isSale: true,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false,
                date: {
                    days: 2,
                    hours: 12,
                    minutes: 24,
                    seconds: 40
                }
            },
            {
                id: 2,
                title: "Men's black T-Shirt",
                price: "124.00",
                photo: blackTShirt,
                rating: 4,
                isNew: false,
                isSale: true,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false,
                date: {
                    days: 7,
                    hours: 4,
                    minutes: 34,
                    seconds: 40
                }
            },
            {
                id: 3,
                title: "Macbook Pro",
                price: "1800.00",
                photo: macbookPro,
                rating: 5,
                isNew: false,
                isSale: true,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false,
                date: {
                    days: 0,
                    hours: 0,
                    minutes: 11,
                    seconds: 40
                }
            },
            {
                id: 4,
                title: "Samsung Galaxy Note 20 Ultra 8GB/256GB",
                price: "720.00",
                photo: phone_samsung_galaxy_note_20_ultra_8gb_256gb,
                rating: 4,
                isNew: false,
                isSale: true,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false,
                date: {
                    days: 3,
                    hours: 3,
                    minutes: 1,
                    seconds: 40
                }
            }
        ],
        sliderItemShown: 1,
        saleBanners: [
            {
                id: 1,
                title: 'Womens',
                photo: templateBanner,
                subtitle: 'Upto 30% Offer!'
            }
        ],
        testimonials: [
            {
                id: 1,
                text: 'Black gold Makin\' your way in the world today takes every thing you\'ve got. Takin\' a break from all you worries the some marry shop theme.',
                name: 'Charle Benson',
                photo: avatar,
                position: 'Lead designer',
                isShown: true
            },
            {
                id: 2,
                text: 'Black gold Makin\' your way in the world today takes every thing you\'ve got. Takin\' a break from all you worries the some marry shop theme.',
                name: 'Hayden Cristian',
                photo: avatar,
                position: 'Lead designer',
                isShown: false
            },
            {
                id: 3,
                text: 'Black gold Makin\' your way in the world today takes every thing you\'ve got. Takin\' a break from all you worries the some marry shop theme.',
                name: 'Ariane Grande',
                photo: avatar,
                position: 'Lead designer',
                isShown: false
            },
        ],
        testimonialShown: 1,
        news: [
            {
                id: 1,
                title: 'New Title',
                tag: 'Fashion',
                commentsCount: 0,
                text: 'The Love Boat soon will making another the Love Boating...',
                url: '/',
                photo: templateBanner,
                date: {
                    day: 24,
                    month: 'Dec'
                }
            },
            {
                id: 2,
                title: 'New New Title',
                tag: 'Fashion',
                commentsCount: 0,
                text: 'The Love Boat soon will making another the Love Boating...',
                url: '/',
                photo: templateBanner,
                date: {
                    day: 24,
                    month: 'Dec'
                }
            },
            {
                id: 3,
                title: 'New New New Title',
                tag: 'Fashion',
                commentsCount: 0,
                text: 'The Love Boat soon will making another the Love Boating...',
                url: '/',
                photo: templateBanner,
                date: {
                    day: 24,
                    month: 'Dec'
                }
            }
        ],
        newsShown: 1
    },
    article: {
        enormousBanner: [
            {
                id: 1,
                photo: templateBanner,
                title: 'First Never Follows',
                subtitle: 'Steller Pack'
            }
        ],
        banners: [
            {
                id: 1,
                photo: templateBanner,
                title: 'Upto 30% offer!',
                subtitle: 'The All-Flex Ignite Dual'
            },
            {
                id: 2,
                photo: templateBanner,
                title: 'A Faster Fusion',
                subtitle: 'The All-Flex Ignite Dual'
            }
        ],
    },
    extremeBanner: [
        {
            id: 1,
            photo: templateBanner,
            title: 'New Smart Phones',
            subtitle: 'Starts at $159'
        }
    ],
    categories: [
        {
            id: 1,
            icon: faTv,
            title: 'Electronics'
        },
        {
            id: 2,
            icon: faMobileAlt,
            title: 'Mobiles'
        },
        {
            id: 3,
            icon: faGem,
            title: 'Fashion'
        },
        {
            id: 4,
            icon: faWallet,
            title: 'Burses'
        },
        {
            id: 5,
            icon: faShoppingBag,
            title: 'Bags'
        },
        {
            id: 6,
            icon: faClock,
            title: 'Watches'
        },
        {
            id: 7,
            icon: faGift,
            title: 'Gifts'
        },
        {
            id: 8,
            icon: faHome,
            title: 'Kitchen'
        },
        {
            id: 9,
            icon: faPizzaSlice,
            title: 'Foods'
        },
        {
            id: 10,
            icon: faTshirt,
            title: 'Clothes'
        }
    ],
    productCategoriesBanner: [
        {
            id: 1,
            photo: templateBanner,
            title: 'Canon Eos',
            subtitle: 'Upto 30% Offer!'
        }
    ]
}

const reducerHome = (state = HomeState, action) => {
    switch (action.type) {
        // case HOT_DEALS_TIMER:
        //     return {
        //         ...state,
        //         sidebar: { ...state.sidebar, sliderItems: state.sidebar.sliderItems.map(item => {
        //                 // const days = item.date.days
        //                 // const hours = item.date.hours
        //                 // const minutes = item.date.minutes
        //                 // const dayHours = days * 24
        //                 // const condition = (60 * minutes * (hours + dayHours)) + item.date.seconds
        //                 // let seconds = hours === 0 ? 
        //                 // minutes === 0 ? item.date.seconds : 
        //                 // (60 * minutes) + item.date.seconds : 
        //                 // minutes === 0 ? item.date.seconds : 
        //                 // condition
        //                 // seconds--
        //                 // const currentDays = Math.floor(seconds / 86400) < 1 ? 0 : Math.floor(seconds / 86400)
        //                 // const currentHours = Math.floor(seconds % 86400) / 3600 < 1 ? 0 : Math.floor(seconds / 3600)
        //                 // const currentMinutes = Math.floor((seconds % 86400) % 3600) / 60 < 1 ? 0 : Math.floor(seconds / 60)
        //                 // const currentSeconds = Math.floor((seconds % 86400) % 3600) % 60
        //                 // item.date.seconds - 1 !== 0 ? Math.floor(item.date.seconds - 1) : 59
        //                 if(seconds !== 0) {
        //                     return { ...item, date: { ...item.date, 
        //                         days: currentDays, 
        //                         hours: currentHours,
        //                          minutes: currentMinutes, 
        //                          seconds: currentSeconds } }
        //                 } 
        //         }) }
        //     }
        case CHANGE_SLIDER_PAGE:
            return {
                ...state,
                slider: { ...state.slider, currentPage: action.currentPage }
            }
        case CHOOSE_SLIDER_ITEM:
            return {
                ...state,
                slider: {
                    ...state.slider, sliderItems: state.slider.sliderItems.map(item => {
                        if (item.id === action.itemId) return { ...item, isShown: true }
                        return { ...item, isShown: false }
                    })
                }
            }
        case CHANGE_HOT_DEALS_SLIDER_ITEM:
            return {
                ...state,
                sidebar: {
                    ...state.sidebar, sliderItemShown: action.productId === 0 ? state.sidebar.sliderItems.length
                        : action.productId <= state.sidebar.sliderItems.length ? action.productId : 1
                }
            }
        case CHOOSE_TESTIMONIAL:
            return {
                ...state,
                sidebar: { ...state.sidebar, testimonialShown: action.currentPage }
            }
        case CHANGE_SHOWN_TESTIMONIAL:
            return {
                ...state,
                sidebar: {
                    ...state.sidebar, testimonials: state.sidebar.testimonials.map(item => {
                        if (item.id === action.itemId) return { ...item, isShown: true }
                        return { ...item, isShown: false }
                    })
                }
            }
        case CHANGE_NEWS:
            return {
                ...state,
                sidebar: {
                    ...state.sidebar, newsShown: action.newsId === 0 ? state.sidebar.news.length : action.newsId <= state.sidebar.news.length ?
                        action.newsId : 1
                }
            }  
        default:
            return state
    }
}

/* Action Creators! */

export const changeSliderPage = (currentPage) => ({ type: CHANGE_SLIDER_PAGE, currentPage })
export const chooseSliderItem = (itemId) => ({ type: CHOOSE_SLIDER_ITEM, itemId })

export const changeHotDealsSliderItem = (productId) => ({ type: CHANGE_HOT_DEALS_SLIDER_ITEM, productId })

export const chooseTestimonial = (currentPage) => ({ type: CHOOSE_TESTIMONIAL, currentPage })
export const changeShownTestimonial = (itemId) => ({ type: CHANGE_SHOWN_TESTIMONIAL, itemId })

export const changeNews = (newsId) => ({ type: CHANGE_NEWS, newsId })

export const hotDealsTimer = () => ({ type: HOT_DEALS_TIMER })

export default reducerHome