// Products' photos! 

import appleWatch from '../../components/Home/Sidebar/Hot Deals/productsPhotos/appleWatch.png'
import appleWatch2 from '../../images/Some products/appleWatch2.jpg'
import appleWatch3 from '../../images/Some products/appleWatch3.jpg'
import appleWatch4 from '../../images/Some products/appleWatch4.jpg'
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

const SET_PRODUCT_ID = 'SET_PRODUCT_ID'

const SET_DATE = 'SET_DATE'

const SET_TOTAL_PRODUCTS_COUNT = 'SET_TOTAL_PRODUCTS_COUNT'

const MOVE_HOME_PAGE = 'MOVE_HOME_PAGE'
const MOVE_SHOP_PAGE = 'MOVE_SHOP_PAGE'
const MOVE_BLOG_PAGE = 'MOVE_BLOG_PAGE'

const SET_IS_CART_POPUP_OPEN_STATUS = 'SET_IS_CART_POPUP_OPEN_STATUS'

const CHANGE_FREE_SHIPPING = 'CHANGE_FREE_SHIPPING'
const CHANGE_FLAT_SHIPPING = 'CHANGE_FLAT_SHIPPING'

const COUNT_TOTAL = 'COUNT_TOTAL'
const COUNT_SHIPPING_TOTAL = 'COUNT_SHIPPING_TOTAL'

const CHANGE_PRODUCT_HOVERED_STATUS = 'CHANGE_PRODUCTS_PRODUCT_HOVERED_STATUS'
const UNSET_PRODUCT_AS_HOVERED = 'UNSET_PRODUCT_AS_HOVERED'

const ADD_TO_CART = 'ADD_TO_CART'

const LIKE_PRODUCT = 'LIKE_PRODUCT'
const REMOVE_LIKE = 'REMOVE_LIKE' 

const CHANGE_ARRIVALS_HOVERED_STATUS = 'CHANGE_ARRIVALS_HOVERED_STATUS'
const UNSET_ARRIVAL_AS_HOVERED = 'UNSET_ARRIVAL_AS_HOVERED'

const CHANGE_FEATURED_HOVERED_STATUS = 'CHANGE_FEATURED_HOVERED_STATUS'
const UNSET_FEATURED_AS_HOVERED = 'UNSET_FEATURED_AS_HOVERED'

const CHANGE_RECOMMENDED_HOVERED_STATUS = 'CHANGE_RECOMMENDED_HOVERED_STATUS'
const UNSET_RECOMMENDED_AS_HOVERED = 'UNSET_RECOMMENDED_AS_HOVERED'

const CHANGE_PRODUCTS_CATEGORIES_HOVERED_STATUS = 'CHANGE_PRODUCTS_CATEGORIES_HOVERED_STATUS'
const UNSET_PRODUCTS_CATEGORIES_AS_HOVERED = 'UNSET_PRODUCTS_CATEGORIES_AS_HOVERED'

const DELETE_FROM_CART = 'DELETE_FROM_CART'

const SET_TEXT_ERROR = 'SET_TEXT_ERROR'
                    
const SET_IS_LAUNGUAGE_SELECT_LIST_OPEN_STATUS = 'SET_IS_LAUNGUAGE_SELECT_LIST_OPEN_STATUS'
const SET_LANGUAGE = 'SET_LANGUAGE' 

const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT'

const moveHomePage = () => ({ type: MOVE_HOME_PAGE })
const moveShopPage = () => ({ type: MOVE_SHOP_PAGE })
const moveBlogPage = () => ({ type: MOVE_BLOG_PAGE })

// All products must be with renamed property photos - not photo!

 
const AppState = {
    navigationLinks: [
        {
            id: 1,
            path: '/Home',
            title: 'Home',
            method: moveHomePage
        },
        {
            id: 2,
            path: '/Home/Shop',
            title: 'Shop',
            method: moveShopPage
        },
        {
            id: 3,
            path: '/',
            title: 'Fashion',
            method: () => null
        },
        {
            id: 4,
            path: '/',
            title: 'Electronics',
            method: () => null
        },
        {
            id: 5,
            path: '/',
            title: 'Pages',
            method: () => null
        },
        {
            id: 6,
            path: '/',
            title:'Features',
            method: () => null
        },
        {
            id: 7,
            path: '/Home/Blog',
            title:'Blog',
            method: moveBlogPage
        }
    ],
    currentPageName: "About Us",
    currentPath: 'Home/About Us',
    date: {
        year: '',
        month: '',
        day: '',
        minutes: ''
    },
    products: [
        {
            id: 1,
            title: "Apple Watch Pink",
            price: "445.00",
            photos: [appleWatch, appleWatch2, appleWatch3, appleWatch4],
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
            },
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course I know that all this information is about to be for all of my products!',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 2,
            title: "Men's black T-Shirt",
            price: "124.00",
            photos: [blackTShirt],
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
            },
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag']  ,
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 3,
            title: "Macbook Pro",
            price: "1800.00",
            photos: [macbookPro],
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
            },
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 4,
            title: "Samsung Galaxy Note 20 Ultra 8GB/256GB",
            price: "720.00",
            photos: [phone_samsung_galaxy_note_20_ultra_8gb_256gb],
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
            },
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 5,
            title: 'Yunique Plus Hair Styler',
            price: '56.00',
            photos: [Yunique_Plus_Hair_Styler],
            rating: 5,
            isNew: true,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 6,
            title: 'Apple iphone 5s - 16GB',
            price: '175.00',
            photos: [Apple_Iphone_5s_16GB],
            rating: 4,
            isNew: true,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 7,
            title: 'Cyber shot Digital cable',
            price: '49.00',
            photos: [CyberShotDigitalCable],
            rating: 2,
            isNew: true,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 8,
            title: 'Skinn Celeste Woman',
            price: '75.00',
            photos: [Skinn_Celeste_Woman],
            rating: 4,
            isNew: true,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 9,
            title: 'Black Casual Sneaker Puma',
            price: '105.00',
            photos: [puma],
            rating: 4,
            isNew: true,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 10,
            title: 'Huawei honour U19',
            price: '259.00',
            photos: [Huawei_honour_U19],
            rating: 4,
            isNew: true,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 11,
            photos: [Slooven_Stripped_T_shirt],
            title: 'Slooven Stripped T-shirt',
            price: '99.00',
            rating: 4,
            isSale: true,
            isNew: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 12,
            photos: [Halogen_Room_Handwear],
            title: 'Halogen Room Handwear',
            price: '289.00',
            rating: 5,
            isSale: false,
            isNew: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            brand: 'Kenxinda',
            tags: ['Tag\'s value', 'Current Tag'],
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 13,
            photos: [XiaomiMI9SEDual_64GB_6GB_Ram],
            title: 'Xiaomi Mi 9 SE Dual - 64GB, 6GB RAM',
            price: '420.78',
            rating: 3,
            isSale: false,
            isNew: true,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 14,
            photos: [Slooven_Stripped_T_shirt],
            title: 'Slooven Stripped T-shirt',
            price: '87.00',
            rating: 4,
            isSale: true,
            isNew: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 15,
            photos: [Skinn_Celeste_Woman],
            title: 'Skinn Celeste Woman EDP',
            price: '56.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 16,
            photos: [IPhone7_32GB_Black],
            title: 'Apple iPhone 7 (32GB)',
            price: '289.00',
            rating: 3,
            isNew: true,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 17,
            photos: [Sasik_External_Disk_500GB],
            title: 'Sasik External Disk-500GB',
            price: '135.00',
            rating: 5,
            isNew: false,
            isSale: true,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 18,
            photos: [BLS_Tulip_BrownCream],
            title: 'BLS Tulip Brown & Cream',
            price: '49.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 19,
            photos: [appleWatch],
            title: 'Apple Watch Pink',
            price: '445.00',
            rating: 5,
            isNew: false,
            isSale: true,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 20,
            photos: [Flipkart_Buildskill_13MM_Powerful_Reversible_Impact_Heavy_Duty],
            title: 'Flipkart Buildskill 13MM Powerful Reversible Impact',
            price: '299.00',
            rating: 3,
            isSale: true,
            isNew: false,
            isInCart: true,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 21,
            photos: [Jios_Dual_Speaker_Black],
            title: 'Jios Dual Speaker-Black',
            price: '52.00',
            rating: 4,
            isSale: false,
            isNew: false,
            isInCart: false,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 22,
            photos: [Shaving_Cream_100gm],
            title: 'Shaving Cream, 100 gm',
            price: '58.00',
            rating: 2,
            isSale: false,
            isNew: false,
            isInCart: false,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 23,
            photos: [Yunique_Plus_Hair_Styler2],
            title: 'Yunique Plus Hair Styler',
            price: '289.00',
            rating: 3,
            isSale: true,
            isNew: false,
            isInCart: false,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 24,
            photos: [Cybershot_Digital_Camera],
            title: 'Cyber shot Digital Camera',
            price: '259.00',
            rating: 5,
            isSale: false,
            isNew: true,
            isInCart: false,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 25,
            photos: [Plastic_Steel_Flask],
            title: 'Plastic Steel Flask(750ml)',
            price: '44.00',
            rating: 4,
            isSale: false,
            isNew: false,
            isInCart: false,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 26,
            photos: [Flipkart_Buildskill_13MM_Powerful_Reversible_Impact_Heavy_Duty],
            title: 'Flipkart Buildskill 13MM Powerful Reversible Impact',
            price: '299.00',
            rating: 3,
            isSale: true,
            isNew: false,
            isInCart: true,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 27,
            photos: [Jios_Dual_Speaker_Black],
            title: 'Jios Dual Speaker-Black',
            price: '52.00',
            rating: 4,
            isSale: false,
            isNew: false,
            isInCart: false,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 28,
            photos: [Shaving_Cream_100gm],
            title: 'Shaving Cream, 100 gm',
            price: '58.00',
            rating: 2,
            isSale: false,
            isNew: false,
            isInCart: false,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 29,
            photos: [Yunique_Plus_Hair_Styler2],
            title: 'Yunique Plus Hair Styler',
            price: '289.00',
            rating: 3,
            isSale: true,
            isNew: false,
            isInCart: false,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 30,
            photos: [Cybershot_Digital_Camera],
            title: 'Cyber shot Digital Camera',
            price: '259.00',
            rating: 5,
            isSale: false,
            isNew: true,
            isInCart: false,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 31,
            photos: [Plastic_Steel_Flask],
            title: 'Plastic Steel Flask(750ml)',
            price: '44.00',
            rating: 4,
            isSale: false,
            isNew: false,
            isInCart: false,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 32,
            photos: [Flipkart_Buildskill_13MM_Powerful_Reversible_Impact_Heavy_Duty],
            title: 'Flipkart Buildskill 13MM Powerful Reversible Impact',
            price: '299.00',
            rating: 3,
            isSale: true,
            isNew: false,
            isInCart: true,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 33,
            photos: [Jios_Dual_Speaker_Black],
            title: 'Jios Dual Speaker-Black',
            price: '52.00',
            rating: 4,
            isSale: false,
            isNew: false,
            isInCart: false,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 34,
            photos: [Shaving_Cream_100gm],
            title: 'Shaving Cream, 100 gm',
            price: '58.00',
            rating: 2,
            isSale: false,
            isNew: false,
            isInCart: false,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 35,
            photos: [Yunique_Plus_Hair_Styler2],
            title: 'Yunique Plus Hair Styler',
            price: '289.00',
            rating: 3,
            isSale: true,
            isNew: false,
            isInCart: false,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 36,
            photos: [Cybershot_Digital_Camera],
            title: 'Cyber shot Digital Camera',
            price: '259.00',
            rating: 5,
            isSale: false,
            isNew: true,
            isInCart: false,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 37,
            photos: [Plastic_Steel_Flask],
            title: 'Plastic Steel Flask(750ml)',
            price: '44.00',
            rating: 4,
            isSale: false,
            isNew: false,
            isInCart: false,
            hovered: false,
            like: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 38,
            photos: [Skinn_Celeste_Woman],
            title: 'Skinn Celeste Woman EDP',
            price: '56.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 39,
            photos: [IPhone7_32GB_Black],
            title: 'Apple iPhone 7 (32GB)',
            price: '289.00',
            rating: 3,
            isNew: true,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 40,
            photos: [Sasik_External_Disk_500GB],
            title: 'Sasik External Disk-500GB',
            price: '135.00',
            rating: 5,
            isNew: false,
            isSale: true,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 41,
            photos: [BLS_Tulip_BrownCream],
            title: 'BLS Tulip Brown & Cream',
            price: '49.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 42,
            photos: [Slooven_Stripped_T_shirt],
            title: 'Slooven Stripped T-shirt',
            price: '99.00',
            rating: 4,
            isSale: true,
            isNew: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 43,
            photos: [Halogen_Room_Handwear],
            title: 'Halogen Room Handwear',
            price: '289.00',
            rating: 5,
            isSale: false,
            isNew: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 44,
            photos: [XiaomiMI9SEDual_64GB_6GB_Ram],
            title: 'Xiaomi Mi 9 SE Dual - 64GB, 6GB RAM',
            price: '420.78',
            rating: 3,
            isSale: false,
            isNew: true,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 45,
            photos: [Slooven_Stripped_T_shirt],
            title: 'Slooven Stripped T-shirt',
            price: '87.00',
            rating: 4,
            isSale: true,
            isNew: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 46,
            photos: [Plastic_Steel_Flask],
            title: 'Plastic Steel Flask(750ml)',
            price: '119.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 47,
            photos: [Slooven_Stripped_T_shirt],
            title: 'Slooven Stripped T-shirt',
            price: '75.00',
            rating: 4,
            isNew: true,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 48,
            photos: [appleWatch],
            title: 'Apple Watch Pink',
            price: '445.00',
            rating: 5,
            isNew: false,
            isSale: true,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 49,
            photos: [BLS_Tulip_BrownCream],
            title: 'BLS Tulip Brown & Cream',
            price: '35.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 50,
            photos: [Skinn_Celeste_Woman],
            title: 'Skinn Celeste Woman EDP',
            price: '56.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 51,
            photos: [IPhone7_32GB_Black],
            title: 'Apple iPhone 7 (32GB)',
            price: '289.00',
            rating: 3,
            isNew: true,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 52,
            photos: [Sasik_External_Disk_500GB],
            title: 'Sasik External Disk-500GB',
            price: '135.00',
            rating: 5,
            isNew: false,
            isSale: true,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 53,
            photos: [BLS_Tulip_BrownCream],
            title: 'BLS Tulip Brown & Cream',
            price: '49.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 54,
            photos: [Skinn_Celeste_Woman],
            title: 'Skinn Celeste Woman EDP',
            price: '56.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 55,
            photos: [IPhone7_32GB_Black],
            title: 'Apple iPhone 7 (32GB)',
            price: '289.00',
            rating: 3,
            isNew: true,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 56,
            photos: [Sasik_External_Disk_500GB],
            title: 'Sasik External Disk-500GB',
            price: '135.00',
            rating: 5,
            isNew: false,
            isSale: true,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 57,
            photos: [BLS_Tulip_BrownCream],
            title: 'BLS Tulip Brown & Cream',
            price: '49.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 58,
            photos: [Skinn_Celeste_Woman],
            title: 'Skinn Celeste Woman EDP',
            price: '56.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 59,
            photos: [IPhone7_32GB_Black],
            title: 'Apple iPhone 7 (32GB)',
            price: '289.00',
            rating: 3,
            isNew: true,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 60,
            photos: [Sasik_External_Disk_500GB],
            title: 'Sasik External Disk-500GB',
            price: '135.00',
            rating: 5,
            isNew: false,
            isSale: true,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        },
        {
            id: 61,
            photos: [BLS_Tulip_BrownCream],
            title: 'BLS Tulip Brown & Cream',
            price: '49.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false,
            date: null,
            description: 'The description of this product is pretty simple. It is an apple watch. Super expensive price for nothing, but camera... And of course ',
            category: ['Category', 'currentCategory'],
            tags: ['Tag\'s value', 'Current Tag'],
            brand: 'Kenxinda',
            properties: [
                {
                    id: 1,
                    title: 'Weight',
                    value: '200kg'
                },
                {
                    id: 2,
                    title: 'Dimensions',
                    value: '200 x 200 x 200 cm'
                },
                {
                    id: 3,
                    title: 'Composition',
                    value: '100% cotton'
                },
                {
                    id: 4,
                    title: 'Colour',
                    value: 'Pink'
                },
                {
                    id: 5,
                    title: 'Size',
                    value: 'Small'
                }
            ]
        }
    ],
    newArrivals: [
        {
            id: 11,
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
            isCompare: false,
            date: null
        },
        {
            id: 12,
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
            isCompare: false,
            date: null
        },
        {
            id: 13,
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
            isCompare: false,
            date: null
        },
        {
            id: 14,
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
            isCompare: false,
            date: null
        },
        {
            id: 15,
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
            isCompare: false,
            date: null
        },
        {
            id: 16,
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
            isCompare: false,
            date: null
        },
        {
            id: 17,
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
            isCompare: false,
            date: null
        },
        {
            id: 18,
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
            isCompare: false,
            date: null
        },
        {
            id: 19,
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
            isCompare: false,
            date: null
        },
    ],
    bestsellers: [
        {
            id: 20,
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
            isCompare: false,
            date: null
        },
        {
            id: 21,
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
            isCompare: false,
            date: null
        },
        {
            id: 22,
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
            isCompare: false,
            date: null
        },
        {
            id: 23,
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
            isCompare: false,
            date: null
        },
        {
            id: 24,
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
            isCompare: false,
            date: null
        },
        {
            id: 25,
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
            isCompare: false,
            date: null
        },
        {
            id: 26,
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
            isCompare: false,
            date: null
        },
        {
            id: 27,
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
            isCompare: false,
            date: null
        },
        {
            id: 28,
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
            isCompare: false,
            date: null
        },
        {
            id: 29,
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
            isCompare: false,
            date: null
        },
        {
            id: 30,
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
            isCompare: false,
            date: null
        },
        {
            id: 31,
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
            isCompare: false,
            date: null
        },
        {
            id: 32,
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
            isCompare: false,
            date: null
        },
        {
            id: 33,
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
            isCompare: false,
            date: null
        },
        {
            id: 34,
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
            isCompare: false,
            date: null
        },
        {
            id: 35,
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
            isCompare: false,
            date: null
        },
        {
            id: 36,
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
            isCompare: false,
            date: null
        },
        {
            id: 37,
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
            isCompare: false,
            date: null
        },
    ],
    featuredProducts: [
        {
            id: 50,
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
            isCompare: false,
            date: null
        },
        {
            id: 51,
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
            isCompare: false,
            date: null
        },
        {
            id: 52,
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
            isCompare: false,
            date: null
        },
        {
            id: 53,
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
            isCompare: false,
            date: null
        },
        {
            id: 54,
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
            isCompare: false,
            date: null
        },
        {
            id: 55,
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
            id: 56,
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
            isCompare: false,
            date: null
        },
        {
            id: 57,
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
            isCompare: false,
            date: null
        },
    ],
    recommended: [
        {
            id: 46,
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
            isCompare: false,
            date: null
        },
        {
            id: 47,
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
            isCompare: false,
            date: null
        },
        {
            id: 48,
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
            isCompare: false,
            date: null
        },
        {
            id: 49,
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
            isCompare: false,
            date: null
        },
        {
            id: 50,
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
            isCompare: false,
            date: null
        },
        {
            id: 51,
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
            isCompare: false,
            date: null
        },
        {
            id: 52,
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
            isCompare: false,
            date: null
        },
        {
            id: 53,
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
            isCompare: false,
            date: null
        },
    ],
    categoriesProducts: [
        {
            id: 54,
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
            isCompare: false,
            date: null
        },
        {
            id: 55,
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
            id: 56,
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
            isCompare: false,
            date: null
        },
        {
            id: 57,
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
            isCompare: false,
            date: null
        },
        {
            id: 58,
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
            isCompare: false,
            date: null
        },
        {
            id: 59,
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
            isCompare: false,
            date: null
        },
        {
            id: 60,
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
            isCompare: false,
            date: null
        },
        {
            id: 61,
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
            isCompare: false,
            date: null
        }
    ],
    newProducts: [
        {
            id: 5,
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
            isCompare: false,
            date: null
        },
        {
            id: 6,
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
            isCompare: false,
            date: null
        },
        {
            id: 7,
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
            isCompare: false,
            date: null
        },
        {
            id: 8,
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
            isCompare: false,
            date: null
        },
        {
            id: 9,
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
            isCompare: false,
            date: null
        },
        {
            id: 10,
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
            isCompare: false,
            date: null
        },
    ],
    wishlist: [],
    productsInCart: [],
    total: '0.00',
    shippingTotal: '0.00',
    isFreeShipping: false,
    isFlatShipping: false,
    totalProductsCount: 0,
    cartPopupStatus: false,
    productId: 1,
    errorText: '',
    isLaunguageSelectListOpenStatus: false,
    language: 'English',
    languages: [
        {
            id: 1,
            name: 'English',
            tag: 'en',
            isActive: true
        },
        {  
            id: 2,
            name: 'Русский',
            tag: 'ru',
            isActive: false
        },
        {
            id: 3,
            name: 'Українська',
            tag: 'ua',
            isActive: false
        }
    ], 
    searchText: ''
}

AppState.totalProductsCount = AppState.products.length

const reducerApp = (state = AppState, action) => {
    switch (action.type) {
        case SET_DATE:
            return {
                ...state,
                date: { ...state.date, year: action.date.year, month: action.date.month, days: action.day, minutes: action.date.minutes }
            }
        case SET_TOTAL_PRODUCTS_COUNT:
            return {
                ...state,
                totalProductsCount: action.count
            }
        case MOVE_HOME_PAGE:
            return {
                ...state,
                currentPageName: 'Home',
                currentPath: 'Home'
            }
        case MOVE_SHOP_PAGE:
            return {
                ...state,
                currentPageName: 'Shop',
                currentPath: 'Home/Shop'
            }
        case MOVE_BLOG_PAGE:
            return {
                ...state,
                currentPageName: 'Blog',
                currentPath: 'Home/Blog'
            }
        case SET_IS_CART_POPUP_OPEN_STATUS:
            return {
                ...state,
                cartPopupStatus: action.status
            }
        case DELETE_FROM_CART:
            const cproduct = state.products.filter(item => item.id === action.itemId).find(item => item)
            let totalPr = Number(state.total) - Number(cproduct.price) + '00'
            return {
                ...state,
                productsInCart: state.productsInCart.filter(item => {
                    if (item.id !== action.itemId) return true
                }),
                products: state.products.map(item => {
                    if(action.itemId === item.id) return { ...item, isInCart: false }
                    return item
                }),
                total: totalPr <= 0 ? 0 : totalPr
            }
        case CHANGE_FREE_SHIPPING:
            return {
                ...state,
                isFreeShipping: action.status,
                isFlatShipping: action.status ? false : true
            }
        case CHANGE_FLAT_SHIPPING:
            return {
                ...state,
                isFlatShipping: action.status,
                isFreeShipping: action.status ? false : true
            }
        case COUNT_TOTAL:
            return {
                ...state,
                total: action.total
            }
        case COUNT_SHIPPING_TOTAL:
            return {
                ...state,
                shippingTotal: action.price
            }
        case SET_TEXT_ERROR:
            return {
                ...state,
                errorText: action.text
            }
        case CHANGE_ARRIVALS_HOVERED_STATUS:
            return {
                ...state,
                newArrivals: state.newArrivals.map(item => {
                    if (item.id === action.itemId) return { ...item, hovered: true }
                    return { ...item, hovered: false }
                })
            }
        case UNSET_ARRIVAL_AS_HOVERED:
            return {
                ...state,
                ...state.article, newArrivals: state.newArrivals.map(item => {
                    return { ...item, hovered: false }
                })
            }
        case CHANGE_FEATURED_HOVERED_STATUS:
            return {
                ...state,
                 featuredProducts: state.featuredProducts.map(item => {
                        if (item.id === action.itemId) return { ...item, hovered: true }
                        return { ...item, hovered: false }
                    })
            }
        case UNSET_FEATURED_AS_HOVERED:
            return {
                ...state,
              
                    featuredProducts: state.featuredProducts.map(item => {
                        return { ...item, hovered: false }
                    })
            }
        case CHANGE_RECOMMENDED_HOVERED_STATUS:
            return {
                ...state,
                    recommended: state.recommended.map(item => {
                        if (action.itemId === item.id) return { ...item, hovered: true }
                        return { ...item, hovered: false }
                    })
            }
        case UNSET_RECOMMENDED_AS_HOVERED:
            return {
                ...state,
                    recommended: state.recommended.map(item => {
                        return { ...item, hovered: false }
                    })
            }
        case CHANGE_PRODUCTS_CATEGORIES_HOVERED_STATUS:
            return {
                ...state,
                categoriesProducts: state.categoriesProducts.map(item => {
                    if (item.id === action.itemId) return { ...item, hovered: true }
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
        case SET_PRODUCT_ID:
            return {
                ...state,
                productId: action.itemId
            }
        case CHANGE_PRODUCT_HOVERED_STATUS:
            return {
                ...state,
                products: state.products.map(item => {
                    if(item.id === action.itemId) return { ...item, hovered: true }
                    return { ...item, hovered: false }
                })
            }   
        case UNSET_PRODUCT_AS_HOVERED:
            return {
                ...state,
                products: state.products.map(item => {
                    return { ...item, hovered: false }
                })
            } 
        case ADD_TO_CART:
            const currentProduct = state.products.filter(item => item.id === action.itemId && true).find(item => item)
            currentProduct.isInCart = true
            let totalPrice = Number(state.total) + Number(currentProduct.price) + '.00'
            return {
                ...state,
                productsInCart: [ ...state.productsInCart, currentProduct ],
                products: state.products.map(item => {
                    if(action.itemId === item.id) return { ...item, isInCart: true }
                    return item
                }),
                total: totalPrice
            }   
        case LIKE_PRODUCT:
            const currentProd = state.products.filter(item => item.id === action.itemId && true).find(item => item)
            currentProd.like = true
            return {
                ...state,
                products: state.products.map(item => {
                    if(action.itemId === item.id) return { ...item, like: true }
                    return item
                }),
                wishlist: [ ...state.wishlist, currentProd ]

            } 
        case REMOVE_LIKE:
            return {
                ...state,
                products: state.products.map(item => {
                    if(action.itemId === item.id) return { ...item, like: false }
                    return item
                }),
                wishlist: state.wishlist.filter(item => item.id !== action.itemId && true)
            }    
        case SET_IS_LAUNGUAGE_SELECT_LIST_OPEN_STATUS:
            return {
                ...state,
                isLaunguageSelectListOpenStatus: action.status
            }        
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.lang,
                languages: state.languages.map(item => {
                    if(item.id === action.itemId) return { ...item, isActive: true }
                    return { ...item, isActive: false }
                }) 
            }            
        case CHANGE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.val
            }
        default:
            return state
    }
}

/* Action Creators! */

export const setProductId = (itemId) => ({ type: SET_PRODUCT_ID, itemId })

export const changeProductHoveredStatus = (itemId) => ({ type: CHANGE_PRODUCT_HOVERED_STATUS, itemId })
export const unsetProductAsHovered = () => ({ type: UNSET_PRODUCT_AS_HOVERED })

export const addToCart = (itemId) => ({ type: ADD_TO_CART, itemId })

export const likeProduct = (itemId) => ({ type: LIKE_PRODUCT, itemId })
export const removeLike = (itemId) => ({ type: REMOVE_LIKE, itemId }) 

export const setDate = (date) => ({ type: SET_DATE, date })

export const setTotalProductsCount = (count) => ({ type: SET_TOTAL_PRODUCTS_COUNT, count })

export const setIsCartPopupOpenStatus = (status) => ({ type: SET_IS_CART_POPUP_OPEN_STATUS, status })

export const changeFreeShippingStatus = (status) => ({ type: CHANGE_FREE_SHIPPING, status })
export const changeFlatShippingStatus = (status) => ({ type: CHANGE_FLAT_SHIPPING, status })

export const countTotal = (total) => ({ type: COUNT_TOTAL, total })
export const countShippingTotal = (price) => ({ type: COUNT_SHIPPING_TOTAL, price })

export const deleteFromCart = (itemId) => ({ type: DELETE_FROM_CART, itemId })

export const setTextError = (text) => ({ type: SET_TEXT_ERROR, text })

export const changeArrivalsHoveredStatus = (itemId) => ({ type: CHANGE_ARRIVALS_HOVERED_STATUS, itemId })
export const unsetArrivalAsHovered = () => ({ type: UNSET_ARRIVAL_AS_HOVERED })

export const changeFeaturedHoveredStatus = (itemId) => ({ type: CHANGE_FEATURED_HOVERED_STATUS, itemId })
export const unsetFeaturedAsHovered = () => ({ type: UNSET_FEATURED_AS_HOVERED })

export const changeRecommendedHoveredStatus = (itemId) => ({ type: CHANGE_RECOMMENDED_HOVERED_STATUS, itemId })
export const unsetRecommendedAsHovered = () => ({ type: UNSET_RECOMMENDED_AS_HOVERED })

export const changeProductsCategoriesHoveredStatus = (itemId) => ({ type: CHANGE_PRODUCTS_CATEGORIES_HOVERED_STATUS, itemId })
export const unsetProductsCategoriesAsHovered = () => ({ type: UNSET_PRODUCTS_CATEGORIES_AS_HOVERED })

export const setIsLaunguageSelectListOpenStatus = (status) => ({ type: SET_IS_LAUNGUAGE_SELECT_LIST_OPEN_STATUS, status })
export const setLanguage = (lang, itemId) => ({ type: SET_LANGUAGE, lang, itemId })

export const changeSearchText = (val) => ({ type: CHANGE_SEARCH_TEXT, val })

export default reducerApp