import templateBanner from '../../images/photoTemplate.jpg'

const SET_DATE = 'SET_DATE'

const SET_TOTAL_PRODUCTS_COUNT = 'SET_TOTAL_PRODUCTS_COUNT'

const MOVE_HOME_PAGE = 'MOVE_HOME_PAGE'
const MOVE_SHOP_PAGE = 'MOVE_SHOP_PAGE'
const MOVE_BLOG_PAGE = 'MOVE_BLOG_PAGE'

const moveHomePage = () => ({ type: MOVE_HOME_PAGE })
const moveShopPage = () => ({ type: MOVE_SHOP_PAGE })
const moveBlogPage = () => ({ type: MOVE_BLOG_PAGE })

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
            title: 'Features',
            method: () => null
        },
        {
            id: 7,
            path: '/Home/Blog',
            title: 'Blog',
            method: moveBlogPage
        }
    ],
    currentPageName: 'About Us',
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
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false
        },
        {
            id: 2,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false
        },
        {
            id: 3,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false
        },
        {
            id: 4,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false
        },
        {
            id: 5,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false
        },
        {
            id: 6,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false
        },
        {
            id: 7,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false
        },
        {
            id: 8,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false
        },
        {
            id: 9,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false
        },
        {
            id: 10,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false
        }
    ],
    totalProductsCount: 0
}

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
        default:
            return state
    }
}

/* Action Creators! */

export const setDate = (date) => ({ type: SET_DATE, date })

export const setTotalProductsCount = (count) => ({ type: SET_TOTAL_PRODUCTS_COUNT, count })

export default reducerApp