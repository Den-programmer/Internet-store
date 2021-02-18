import templateBanner from '../../images/photoTemplate.jpg'

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

const DELETE_FROM_CART = 'DELETE_FROM_CART'

const SET_TEXT_ERROR = 'SET_TEXT_ERROR'

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
            like: false,
            isInCart: false,
            isCompare: false,
            isInStock: true
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
            like: false,
            isInCart: false,
            isCompare: false,
            isInStock: true
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
            like: false,
            isInCart: false,
            isCompare: false,
            isInStock: true
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
            like: false,
            isInCart: false,
            isCompare: false,
            isInStock: true
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
            like: false,
            isInCart: false,
            isCompare: false,
            isInStock: true
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
            like: false,
            isInCart: false,
            isCompare: false,
            isInStock: true
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
            like: false,
            isInCart: false,
            isCompare: false,
            isInStock: true
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
            like: false,
            isInCart: false,
            isCompare: false,
            isInStock: true
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
            like: false,
            isInCart: false,
            isCompare: false,
            isInStock: true
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
            like: false,
            isInCart: false,
            isCompare: false,
            isInStock: true
        }
    ],
    productsInCart: [
        {
            id: 1,
            photo: templateBanner,
            title: 'Halogen Room Handwear',
            price: '125.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: true,
            isCompare: false,
            isInStock: true,
        },
        {
            id: 2,
            photo: templateBanner,
            title: 'Shaving Cream, 100 gm',
            price: '75.00',
            rating: 4,
            isNew: false,
            isSale: false,
            hovered: false,
            like: false,
            isInCart: true,
            isCompare: false,
            isInStock: true
        }
    ],
    total: '0.00',
    shippingTotal: '0.00',
    isFreeShipping: false,
    isFlatShipping: false,
    totalProductsCount: 0,
    cartPopupStatus: false,
    productId: 1,
    errorText: ''
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
        case SET_IS_CART_POPUP_OPEN_STATUS:
            return {
                ...state,
                cartPopupStatus: action.status
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                productsInCart: state.productsInCart.filter(item => {
                    if (item.id !== action.itemId) return true
                })
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
        default:
            return state
    }
}

/* Action Creators! */

export const setDate = (date) => ({ type: SET_DATE, date })

export const setTotalProductsCount = (count) => ({ type: SET_TOTAL_PRODUCTS_COUNT, count })

export const setIsCartPopupOpenStatus = (status) => ({ type: SET_IS_CART_POPUP_OPEN_STATUS, status })

export const changeFreeShippingStatus = (status) => ({ type: CHANGE_FREE_SHIPPING, status })
export const changeFlatShippingStatus = (status) => ({ type: CHANGE_FLAT_SHIPPING, status })

export const countTotal = (total) => ({ type: COUNT_TOTAL, total })
export const countShippingTotal = (price) => ({ type: COUNT_SHIPPING_TOTAL, price })

export const deleteFromCart = (itemId) => ({ type: DELETE_FROM_CART, itemId })

export const setTextError = (text) => ({ type: SET_TEXT_ERROR, text })

export default reducerApp