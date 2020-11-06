import sliderItem1 from '../../components/Home/Banner Items/slider/img/sliderItem1.jpg'
import sliderItem2 from '../../components/Home/Banner Items/slider/img/sliderItem2.jpg'
import sliderItem3 from '../../components/Home/Banner Items/slider/img/sliderItem3.jpg'
import templateBanner from '../../components/Home/Banner Items/AdditionalBanners/img/photo.jpg'

// Products' photos! 

import appleWatch from '../../components/Home/Sidebar/Hot Deals/productsPhotos/appleWatch.png'
import blackTShirt from '../../components/Home/Sidebar/Hot Deals/productsPhotos/blackTShirt.jpg'
import macbookPro from '../../components/Home/Sidebar/Hot Deals/productsPhotos/macbookPro.png'
import phone_samsung_galaxy_note_20_ultra_8gb_256gb from '../../components/Home/Sidebar/Hot Deals/productsPhotos/phone-samsung-galaxy-note-20-ultra-8gb-256gb.png'
import Yunique_Plus_Hair_Styler from '../../components/Home/Sidebar/NewProducts/img/Yunique_Plus_Hair_Styler.jpg'
import Apple_Iphone_5s_16GB from '../../components/Home/Sidebar/NewProducts/img/appleIphone5s_16GB.png'
import CyberShotDigitalCable from '../../components/Home/Sidebar/NewProducts/img/cyberShotCable.png'
import Skinn_Celeste_Woman from '../../components/Home/Sidebar/NewProducts/img/Skinn_Celeste_Woman.png'
import puma from '../../components/Home/Sidebar/NewProducts/img/puma.png'
import Huawei_honour_U19 from '../../components/Home/Sidebar/NewProducts/img/Huawei_honour_U19.png'
import Slooven_Stripped_T_shirt from '../../components/Home/MainArticle/New Arrivals/img/Slooven_Stripped_T_shirt.jpg'
import Halogen_Room_Handwear from '../../components/Home/MainArticle/New Arrivals/img/handwear.png'
import XiaomiMI9SEDual_64GB_6GB_Ram from '../../components/Home/MainArticle/New Arrivals/img/XiaomiMI9SEDual_64GB_6GB_Ram.png'
import Flipkart_Buildskill_13MM_Powerful_Reversible_Impact_Heavy_Duty from '../../components/Home/MainArticle/BestSellers/img/Flipkart_Buildskill_13MM_Powerful_Reversible_Impact_Heavy_Duty.png'
import Jios_Dual_Speaker_Black from '../../components/Home/MainArticle/BestSellers/img/Jios_Dual_Speaker_Black.png'
import Shaving_Cream_100gm from '../../components/Home/MainArticle/BestSellers/img/Shaving_Cream_100gm.png'
import Yunique_Plus_Hair_Styler2 from '../../components/Home/MainArticle/BestSellers/img/Yunique_Plus_Hair_Styler.png'
import Cybershot_Digital_Camera from '../../components/Home/MainArticle/BestSellers/img/Cybershot_Digital_Camera.png'
import Plastic_Steel_Flask from '../../components/Home/MainArticle/BestSellers/img/Plastic_Steel_Flask.png'
import IPhone7_32GB_Black from '../../components/Home/MainArticle/Featured Products/img/IPnone7_32GB_Black.png'
import Sasik_External_Disk_500GB from '../../components/Home/MainArticle/Featured Products/img/Sasik_External_Disk_500GB.jpg'
import BLS_Tulip_BrownCream from '../../components/Home/MainArticle/Featured Products/img/BLS_Tulip_BrownCream.png'


// Avatars!!


import avatar from '../../images/avatar.jpg'
import avatar9 from '../../images/avatar9.jpg'
import avatar10 from '../../images/avatar10.png'
import { faTv, faMobileAlt, faGem, faWallet, faGift, faHome, faPizzaSlice, faTshirt, faShoppingBag, faClock } from '@fortawesome/free-solid-svg-icons'


const CHANGE_SLIDER_PAGE = 'CHANGE_SLIDER_PAGE'
const CHOOSE_SLIDER_ITEM = 'CHOOSE_SLIDER_ITEM'

const CHANGE_HOT_DEALS_SLIDER_ITEM = 'CHANGE_HOT_DEALS_SLIDER_ITEM'

const CHOOSE_TESTIMONIAL = 'CHOOSE_TESTIMONIAL'
const CHANGE_SHOWN_TESTIMONIAL = 'CHANGE_SHOWN_TESTIMONIAL'

const CHANGE_NEWS = 'CHANGE_NEWS'

const CHANGE_ARRIVALS_HOVERED_STATUS = 'CHANGE_ARRIVALS_HOVERED_STATUS'
const UNSET_ARRIVAL_AS_HOVERED = 'UNSET_ARRIVAL_AS_HOVERED'

const CHANGE_FEATURED_HOVERED_STATUS = 'CHANGE_FEATURED_HOVERED_STATUS'
const UNSET_FEATURED_AS_HOVERED = 'UNSET_FEATURED_AS_HOVERED'

const CHANGE_RECOMMENDED_HOVERED_STATUS = 'CHANGE_RECOMMENDED_HOVERED_STATUS'
const UNSET_RECOMMENDED_AS_HOVERED = 'UNSET_RECOMMENDED_AS_HOVERED'

const CHANGE_PRODUCTS_CATEGORIES_HOVERED_STATUS = 'CHANGE_PRODUCTS_CATEGORIES_HOVERED_STATUS'
const UNSET_PRODUCTS_CATEGORIES_AS_HOVERED = 'UNSET_PRODUCTS_CATEGORIES_AS_HOVERED'

const LIKE_PRODUCT = 'LIKE_PRODUCT'
const REMOVE_LIKE = 'REMOVE_LIKE' 

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
        newProducts: [
            {
                id: 1,
                title: 'Yunique Plus Hair Styler',
                price: '56.00',
                photo: Yunique_Plus_Hair_Styler,
                rating: 5,
                isNew: true,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 2,
                title: 'Apple iphone 5s - 16GB',
                price: '175.00',
                photo: Apple_Iphone_5s_16GB,
                rating: 4,
                isNew: true,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 3,
                title: 'Cyber shot Digital cable',
                price: '49.00',
                photo: CyberShotDigitalCable,
                rating: 2,
                isNew: true,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 4,
                title: 'Skinn Celeste Woman',
                price: '75.00',
                photo: Skinn_Celeste_Woman,
                rating: 4,
                isNew: true,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 5,
                title: 'Black Casual Sneaker Puma',
                price: '105.00',
                photo: puma,
                rating: 4,
                isNew: true,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 6,
                title: 'Huawei honour U19',
                price: '259.00',
                photo: Huawei_honour_U19,
                rating: 4,
                isNew: true,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            }
        ],
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
                photo: avatar9,
                position: 'Lead designer',
                isShown: false
            },
            {
                id: 3,
                text: 'Black gold Makin\' your way in the world today takes every thing you\'ve got. Takin\' a break from all you worries the some marry shop theme.',
                name: 'Ariane Grande',
                photo: avatar10,
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
        newArrivals: [
            {
                id: 1,
                photo: Slooven_Stripped_T_shirt,
                title: 'Slooven Stripped T-shirt',
                price: '99.00',
                rating: 4,
                isSale: true,
                isNew: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 2,
                photo: Halogen_Room_Handwear,
                title: 'Halogen Room Handwear',
                price: '289.00',
                rating: 5,
                isSale: false,
                isNew: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 3,
                photo: XiaomiMI9SEDual_64GB_6GB_Ram,
                title: 'Xiaomi Mi 9 SE Dual - 64GB, 6GB RAM',
                price: '420.78',
                rating: 3,
                isSale: false,
                isNew: true,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 4,
                photo: Slooven_Stripped_T_shirt,
                title: 'Slooven Stripped T-shirt',
                price: '87.00',
                rating: 4,
                isSale: true,
                isNew: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 5,
                photo: Skinn_Celeste_Woman,
                title: 'Skinn Celeste Woman EDP',
                price: '56.00',
                rating: 4,
                isNew: false,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 6,
                photo: IPhone7_32GB_Black,
                title: 'Apple iPhone 7 (32GB)',
                price: '289.00',
                rating: 3,
                isNew: true,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 7,
                photo: Sasik_External_Disk_500GB,
                title: 'Sasik External Disk-500GB',
                price: '135.00',
                rating: 5,
                isNew: false,
                isSale: true,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 8,
                photo: BLS_Tulip_BrownCream,
                title: 'BLS Tulip Brown & Cream',
                price: '49.00',
                rating: 4,
                isNew: false,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 9,
                photo: appleWatch,
                title: 'Apple Watch Pink',
                price: '445.00',
                rating: 5,
                isNew: false,
                isSale: true,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
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
        bestsellers: [
            {
                id: 1,
                photo: Flipkart_Buildskill_13MM_Powerful_Reversible_Impact_Heavy_Duty,
                title: 'Flipkart Buildskill 13MM Powerful Reversible Impact',
                price: '299.00',
                rating: 3,
                isSale: true,
                isNew: false,
                isInCart: true,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 2,
                photo: Jios_Dual_Speaker_Black,
                title: 'Jios Dual Speaker-Black',
                price: '52.00',
                rating: 4,
                isSale: false,
                isNew: false,
                isInCart: false,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 3,
                photo: Shaving_Cream_100gm,
                title: 'Shaving Cream, 100 gm',
                price: '58.00',
                rating: 2,
                isSale: false,
                isNew: false,
                isInCart: false,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 4,
                photo: Yunique_Plus_Hair_Styler2,
                title: 'Yunique Plus Hair Styler',
                price: '289.00',
                rating: 3,
                isSale: true,
                isNew: false,
                isInCart: false,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 5,
                photo: Cybershot_Digital_Camera,
                title: 'Cyber shot Digital Camera',
                price: '259.00',
                rating: 5,
                isSale: false,
                isNew: true,
                isInCart: false,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 6,
                photo: Plastic_Steel_Flask,
                title: 'Plastic Steel Flask(750ml)',
                price: '44.00',
                rating: 4,
                isSale: false,
                isNew: false,
                isInCart: false,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 7,
                photo: Flipkart_Buildskill_13MM_Powerful_Reversible_Impact_Heavy_Duty,
                title: 'Flipkart Buildskill 13MM Powerful Reversible Impact',
                price: '299.00',
                rating: 3,
                isSale: true,
                isNew: false,
                isInCart: true,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 8,
                photo: Jios_Dual_Speaker_Black,
                title: 'Jios Dual Speaker-Black',
                price: '52.00',
                rating: 4,
                isSale: false,
                isNew: false,
                isInCart: false,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 9,
                photo: Shaving_Cream_100gm,
                title: 'Shaving Cream, 100 gm',
                price: '58.00',
                rating: 2,
                isSale: false,
                isNew: false,
                isInCart: false,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 10,
                photo: Yunique_Plus_Hair_Styler2,
                title: 'Yunique Plus Hair Styler',
                price: '289.00',
                rating: 3,
                isSale: true,
                isNew: false,
                isInCart: false,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 11,
                photo: Cybershot_Digital_Camera,
                title: 'Cyber shot Digital Camera',
                price: '259.00',
                rating: 5,
                isSale: false,
                isNew: true,
                isInCart: false,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 12,
                photo: Plastic_Steel_Flask,
                title: 'Plastic Steel Flask(750ml)',
                price: '44.00',
                rating: 4,
                isSale: false,
                isNew: false,
                isInCart: false,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 13,
                photo: Flipkart_Buildskill_13MM_Powerful_Reversible_Impact_Heavy_Duty,
                title: 'Flipkart Buildskill 13MM Powerful Reversible Impact',
                price: '299.00',
                rating: 3,
                isSale: true,
                isNew: false,
                isInCart: true,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 14,
                photo: Jios_Dual_Speaker_Black,
                title: 'Jios Dual Speaker-Black',
                price: '52.00',
                rating: 4,
                isSale: false,
                isNew: false,
                isInCart: false,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 15,
                photo: Shaving_Cream_100gm,
                title: 'Shaving Cream, 100 gm',
                price: '58.00',
                rating: 2,
                isSale: false,
                isNew: false,
                isInCart: false,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 16,
                photo: Yunique_Plus_Hair_Styler2,
                title: 'Yunique Plus Hair Styler',
                price: '289.00',
                rating: 3,
                isSale: true,
                isNew: false,
                isInCart: false,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 17,
                photo: Cybershot_Digital_Camera,
                title: 'Cyber shot Digital Camera',
                price: '259.00',
                rating: 5,
                isSale: false,
                isNew: true,
                isInCart: false,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 18,
                photo: Plastic_Steel_Flask,
                title: 'Plastic Steel Flask(750ml)',
                price: '44.00',
                rating: 4,
                isSale: false,
                isNew: false,
                isInCart: false,
                hovered: false,
                like: false,
                isInStock: true,
                isCompare: false
            }
        ],
        featuredProducts: [
            {
                id: 1,
                photo: Skinn_Celeste_Woman,
                title: 'Skinn Celeste Woman EDP',
                price: '56.00',
                rating: 4,
                isNew: false,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 2,
                photo: IPhone7_32GB_Black,
                title: 'Apple iPhone 7 (32GB)',
                price: '289.00',
                rating: 3,
                isNew: true,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 3,
                photo: Sasik_External_Disk_500GB,
                title: 'Sasik External Disk-500GB',
                price: '135.00',
                rating: 5,
                isNew: false,
                isSale: true,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 4,
                photo: BLS_Tulip_BrownCream,
                title: 'BLS Tulip Brown & Cream',
                price: '49.00',
                rating: 4,
                isNew: false,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 5,
                photo: Slooven_Stripped_T_shirt,
                title: 'Slooven Stripped T-shirt',
                price: '99.00',
                rating: 4,
                isSale: true,
                isNew: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 6,
                photo: Halogen_Room_Handwear,
                title: 'Halogen Room Handwear',
                price: '289.00',
                rating: 5,
                isSale: false,
                isNew: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 7,
                photo: XiaomiMI9SEDual_64GB_6GB_Ram,
                title: 'Xiaomi Mi 9 SE Dual - 64GB, 6GB RAM',
                price: '420.78',
                rating: 3,
                isSale: false,
                isNew: true,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 8,
                photo: Slooven_Stripped_T_shirt,
                title: 'Slooven Stripped T-shirt',
                price: '87.00',
                rating: 4,
                isSale: true,
                isNew: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            }
        ],
        enormousBanner: [
            {
                id: 1,
                photo: templateBanner,
                title: 'First Never Follows',
                subtitle: 'Steller Pack'
            }
        ],
        recommended: [
            {
                id: 1,
                photo: Plastic_Steel_Flask,
                title: 'Plastic Steel Flask(750ml)',
                price: '119.00',
                rating: 4,
                isNew: false,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 2,
                photo: Slooven_Stripped_T_shirt,
                title: 'Slooven Stripped T-shirt',
                price: '75.00',
                rating: 4,
                isNew: true,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 3,
                photo: appleWatch,
                title: 'Apple Watch Pink',
                price: '445.00',
                rating: 5,
                isNew: false,
                isSale: true,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 4,
                photo: BLS_Tulip_BrownCream,
                title: 'BLS Tulip Brown & Cream',
                price: '35.00',
                rating: 4,
                isNew: false,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 5,
                photo: Skinn_Celeste_Woman,
                title: 'Skinn Celeste Woman EDP',
                price: '56.00',
                rating: 4,
                isNew: false,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 6,
                photo: IPhone7_32GB_Black,
                title: 'Apple iPhone 7 (32GB)',
                price: '289.00',
                rating: 3,
                isNew: true,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 7,
                photo: Sasik_External_Disk_500GB,
                title: 'Sasik External Disk-500GB',
                price: '135.00',
                rating: 5,
                isNew: false,
                isSale: true,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            },
            {
                id: 8,
                photo: BLS_Tulip_BrownCream,
                title: 'BLS Tulip Brown & Cream',
                price: '49.00',
                rating: 4,
                isNew: false,
                isSale: false,
                hovered: false,
                like: false,
                isInCart: false,
                isInStock: true,
                isCompare: false
            }
        ]
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
    categoriesProducts: [
        {
            id: 1,
            photo: Skinn_Celeste_Woman,
            title: 'Skinn Celeste Woman EDP',
            price: '56.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock:true,
            isCompare: false
        },
        {
            id: 2,
            photo: IPhone7_32GB_Black,
            title: 'Apple iPhone 7 (32GB)',
            price: '289.00',
            rating: 3,
            isNew: true,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock:true,
            isCompare: false
        },
        {
            id: 3,
            photo: Sasik_External_Disk_500GB,
            title: 'Sasik External Disk-500GB',
            price: '135.00',
            rating: 5,
            isNew: false,
            isSale: true,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock:true,
            isCompare: false
        },
        {
            id: 4,
            photo: BLS_Tulip_BrownCream,
            title: 'BLS Tulip Brown & Cream',
            price: '49.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock:true,
            isCompare: false
        },
        {
            id: 5,
            photo: Skinn_Celeste_Woman,
            title: 'Skinn Celeste Woman EDP',
            price: '56.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock:true,
            isCompare: false
        },
        {
            id: 6,
            photo: IPhone7_32GB_Black,
            title: 'Apple iPhone 7 (32GB)',
            price: '289.00',
            rating: 3,
            isNew: true,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock:true,
            isCompare: false
        },
        {
            id: 7,
            photo: Sasik_External_Disk_500GB,
            title: 'Sasik External Disk-500GB',
            price: '135.00',
            rating: 5,
            isNew: false,
            isSale: true,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock:true,
            isCompare: false
        },
        {
            id: 8,
            photo: BLS_Tulip_BrownCream,
            title: 'BLS Tulip Brown & Cream',
            price: '49.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock:true,
            isCompare: false
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
        case CHANGE_ARRIVALS_HOVERED_STATUS:
            return {
                ...state,
                article: {
                    ...state.article, newArrivals: state.article.newArrivals.map(item => {
                        if (item.id === action.itemId) return { ...item, hovered: true }
                        return { ...item, hovered: false }
                    })
                }
            }
        case UNSET_ARRIVAL_AS_HOVERED:
            return {
                ...state,
                article: {
                    ...state.article, newArrivals: state.article.newArrivals.map(item => {
                        return { ...item, hovered: false }
                    })
                }
            }    
        case CHANGE_FEATURED_HOVERED_STATUS:
            return {
                ...state,
                article: {
                    ...state.article, featuredProducts: state.article.featuredProducts.map(item => {
                        if (item.id === action.itemId) return { ...item, hovered: true }
                        return { ...item, hovered: false }
                    })
                }
            }
        case UNSET_FEATURED_AS_HOVERED:
            return {
                ...state,
                article: {
                    ...state.article, featuredProducts: state.article.featuredProducts.map(item => {
                        return { ...item, hovered: false }
                    })
                }
            }
        case CHANGE_RECOMMENDED_HOVERED_STATUS:
            return {
                ...state,
                article: {
                    ...state.article, recommended: state.article.recommended.map(item => {
                        if (action.itemId === item.id) return { ...item, hovered: true }
                        return { ...item, hovered: false }
                    })
                }
            }
        case UNSET_RECOMMENDED_AS_HOVERED:
            return {
                ...state,
                article: {
                    ...state.article, recommended: state.article.recommended.map(item => {
                        return { ...item, hovered: false }
                    })
                }
            }
        case CHANGE_PRODUCTS_CATEGORIES_HOVERED_STATUS: 
            return {
                ...state,
                categoriesProducts: state.categoriesProducts.map(item => {
                    if(item.id === action.itemId) return { ...item, hovered:true }
                    return { ...item, hovered: false }
                })
            }
        case UNSET_PRODUCTS_CATEGORIES_AS_HOVERED:
            return {
                ...state,
                categoriesProducts: state.categoriesProducts.map(item => {
                    return { ...item, hovered: false }
                })
            } 
        // Следующие строчки должны быть в reducerApp!
        // case LIKE_PRODUCT:
        //     return {
        //         ...state,
        //         products: state.products.map(item => {
        //             if(action.itemId === item.id) return { ...item, like: true }
        //             return item
        //         })
        //     } 
        // case REMOVE_LIKE:
        //     return {
        //         ...state,
        //         products: state.products.map(item => {
        //             if(action.itemId === item.id) return { item, like: false }
        //             return item
        //         })
        //     }             
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

export const changeArrivalsHoveredStatus = (itemId) => ({ type: CHANGE_ARRIVALS_HOVERED_STATUS, itemId })
export const unsetArrivalAsHovered = () => ({ type: UNSET_ARRIVAL_AS_HOVERED })

export const changeFeaturedHoveredStatus = (itemId) => ({ type: CHANGE_FEATURED_HOVERED_STATUS, itemId })
export const unsetFeaturedAsHovered = () => ({ type: UNSET_FEATURED_AS_HOVERED })

export const changeRecommendedHoveredStatus = (itemId) => ({ type: CHANGE_RECOMMENDED_HOVERED_STATUS, itemId })
export const unsetRecommendedAsHovered = () => ({ type: UNSET_RECOMMENDED_AS_HOVERED })

export const changeProductsCategoriesHoveredStatus = (itemId) => ({ type: CHANGE_PRODUCTS_CATEGORIES_HOVERED_STATUS, itemId })
export const unsetProductsCategoriesAsHovered = () => ({ type: UNSET_PRODUCTS_CATEGORIES_AS_HOVERED })

export const likeProduct = (itemId) => ({ type: LIKE_PRODUCT, itemId })
export const removeLike = (itemId) => ({ type: REMOVE_LIKE, itemId }) 

export const hotDealsTimer = () => ({ type: HOT_DEALS_TIMER })

export default reducerHome