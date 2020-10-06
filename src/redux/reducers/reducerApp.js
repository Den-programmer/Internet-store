const SET_DATE = 'SET_DATE'

const MOVE_HOME_PAGE = 'MOVE_HOME_PAGE'
const MOVE_ABOUT_US_PAGE = 'MOVE_ABOUT_US_PAGE'
const MOVE_SHOP_PAGE = 'MOVE_SHOP_PAGE'
const MOVE_BLOG_PAGE = 'MOVE_BLOG_PAGE'

/* Set Some Current Options Before Moving To Another Page! */

export const moveAboutUsPage = () => ({ type: MOVE_ABOUT_US_PAGE })
export const moveHomePage = () => ({ type: MOVE_HOME_PAGE })
export const moveShopPage = () => ({ type: MOVE_SHOP_PAGE })
export const moveBlogPage = () => ({ type: MOVE_BLOG_PAGE })

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
    }
}

const reducerApp = (state = AppState, action) => {
    switch (action.type) {
        case SET_DATE:
            return {
                ...state,
                date: { ...state.date, year: action.date.year, month: action.date.month, days: action.day, minutes: action.date.minutes }
            }
        case MOVE_ABOUT_US_PAGE:
            return {
                ...state,
                currentPageName: 'About Us',
                currentPath: 'Home/About Us'
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

export default reducerApp