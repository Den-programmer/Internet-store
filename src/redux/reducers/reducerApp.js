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
import { ProductsAPI } from '../../DAL/productsApi'

const SET_PRODUCTS = 'SET_PRODUCTS'

const SET_PRODUCT_ID = 'SET_PRODUCT_ID'

const SET_DATE = 'SET_DATE'

const SET_TOTAL_PRODUCTS_COUNT = 'SET_TOTAL_PRODUCTS_COUNT'

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

const IS_FETCHING = 'IS_FETCHING'

// All products must be with renamed property photos - not photo!

 
const AppState = {
    navigationLinks: [
        {
            id: 1,
            path: '/Home',
            title: 'Home'
        },
        {
            id: 2,
            path: '/Home/Shop',
            title: 'Shop'
        },
        {
            id: 3,
            path: '/Home/Shop',
            title: 'Fashion'
        },
        {
            id: 4,
            path: '/Home/Shop',
            title: 'Electronics'
        },
        {
            id: 5,
            path: '/',
            title: 'Pages'
        },
        {
            id: 6,
            path: '/',
            title:'Features'
        },
        // {
        //     id: 7,
        //     path: '/Home/Blog',
        //     title:'Blog'
        // }
    ],
    date: {
        year: '',
        month: '',
        day: '',
        minutes: ''
    },
    products: [],
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
    isFreeShipping: true,
    isFlatShipping: false,
    totalProductsCount: 0,
    cartPopupStatus: false,
    productId: 1,
    errorText: '',
    isLaunguageSelectListOpenStatus: false,
    language: 'English',
    // language: 'en',
    // Change the reducer, make a case that checks tag - property language!
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
        },
        {
            id: 4,
            name: 'Dansk',
            tag: 'da',
            isActive: false
        }
    ], 
    searchText: '',
    isFetching: false
}

AppState.totalProductsCount = AppState.products.length

const reducerApp = (state = AppState, action) => {
    switch (action.type) {
        case SET_DATE:
            return {
                ...state,
                date: { ...state.date, year: action.date.year, month: action.date.month, days: action.day, minutes: action.date.minutes }
            }
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }    
        case SET_TOTAL_PRODUCTS_COUNT:
            return {
                ...state,
                totalProductsCount: action.count
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
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.status
            }        
        default:
            return state
    }
}

/* Action Creators! */

const setProducts = (products) => ({ type: SET_PRODUCTS, products })

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

export const changeFetchingStatus = (status) => ({ type: IS_FETCHING, status }) 

// Thunk Creators!

export const requestProducts = () => async (dispatch) => {
    try {
        dispatch(changeFetchingStatus(true))
        const products = await ProductsAPI.getAllProducts()
        let productId = 0
        const productsData = products.map((product) => {
            const { title, price, photos, rating, isNewest, isSale, hovered, like, isInCart, 
                isInStock, isCompare, desc, categories, tags, brand, type,
            weight, dimensions, composition, color, size  } = product
            productId++
            return {
                id: productId,
                title,
                price,
                photos,
                rating,
                isNew: isNewest,
                isSale,
                hovered,
                like,
                isInCart,
                isInStock,
                isCompare,
                description: desc,
                category: categories,
                tags,
                brand,
                type,
                properties: [
                    {
                        id: 1,
                        title: 'Weight',
                        value: weight
                    },
                    {
                        id: 2,
                        title: 'Dimensions',
                        value: dimensions
                    },
                    {
                        id: 3,
                        title: 'Composition',
                        value: composition
                    },
                    {
                        id: 4,
                        title: 'Color',
                        value: color
                    },
                    {
                        id: 5,
                        title: 'Size',
                        value: size
                    }
                ]
            }
        })
        dispatch(setProducts(productsData))   
        dispatch(changeFetchingStatus(false))         
    } catch(err) {
        alert("Something has gone wrong... " + err)
        dispatch(changeFetchingStatus(false))         
    }
}

export const addProduct = (product) => async (dispatch) => {
    try {
        dispatch(changeFetchingStatus(true)) 
        const data = await ProductsAPI.addProduct(product)
        console.log(data)
        dispatch(changeFetchingStatus(false)) 
    } catch(err) {
        alert("Something has gone wrong... " + err)
        dispatch(changeFetchingStatus(false)) 
    }
}

export default reducerApp