const SET_BRAND = 'SET_BRAND'
const CHANGE_PRICE_FILTER = 'CHANGE_PRICE_FILTER' 
const SET_COLOR_FILTER = 'SET_COLOR_FILTER'
const SET_TYPE = 'SET_TYPE'

const OPEN_SHOP_FILTERS_MENU = 'OPEN_SHOP_FILTERS_MENU'

const OPEN_PRODUCTS_PORTION_OPTION_LIST = 'OPEN_PRODUCTS_PORTION_OPTION_LIST'
const CHANGE_PRODUCTS_PORTION = 'CHANGE_PRODUCTS_PORTION'

const CHANGE_SIDEBAR_SHOWN_STATUS = 'CHANGE_SIDEBAR_SHOWN_STATUS'

const CHANGE_PAGE = 'CHANGE_PAGE'

const SET_CATEGORIES = 'SET_CATEGORIES'

const ShopState = {
    currentShopPage: 'Shop Without Sidebar',
    isSidebarShown: false,
    productsPortion: 25,
    productsPerRow: 5,
    currentPage: 1,
    isProductsPortionOptionListOpen: false,
    productsCountMenu: [
        {
            id: 1,
            portion: 16,
            isChosen: true,
            productsPerRow: 4
        },
        {
            id: 2,
            portion: 25,
            isChosen: false,
            productsPerRow: 5
        },
        {
            id: 3,
            portion: 10,
            isChosen: false,
            productsPerRow: 1
        }
    ],
    shopCategories: [
        {
            id: 1,
            title: 'fashionAndClothing',
            productsCount: 128,
            isAdded: true,
            category: 'Fashion & Clothing'
        },
        {
            id: 2,
            title: 'Mobile_phones',
            productsCount: 89,
            isAdded: true,
            category: 'Mobile Phones'
        },
        {
            id: 3,
            title: 'ElectronicsAndHitech',
            productsCount: 205,
            isAdded: true,
            category: 'Electronics & Hitech'
        },
        {
            id: 4,
            title: 'FoodsAndFruits',
            productsCount: 118,
            isAdded: true,
            category: 'Foods & Fruits'
        },
        {
            id: 5,
            title: 'BeautyAndHealth',
            productsCount: 45,
            isAdded: true,
            category: 'Beauty & Health'
        },
        {
            id: 6,
            title: 'ShoesAndBags',
            productsCount: 23,
            isAdded: true,
            category: 'Shoes & Bags'
        },
        {
            id: 7,
            title: 'DecorsAndHome',
            productsCount: 19,
            isAdded: true,
            category: 'Decors & Home'
        },
        {
            id: 8,
            title: 'SportsAndOuterwear',
            productsCount: 34,
            isAdded: true,
            category: 'Sports & Outerwear'
        }
    ],
    shopFilters: [
        {
            id: 1,
            title: 'Brands',
            isOptionOpen: false,
            menuOptions: [
                {
                    id: 1,
                    title: 'Adcom',
                    isChosen: false
                },
                {
                    id: 2,
                    title: 'Brillon',
                    isChosen: false
                },
                {
                    id: 3,
                    title: 'Datawind',
                    isChosen: false
                },
                {
                    id: 4,
                    title: 'GoodOne',
                    isChosen: false
                },
                {
                    id: 5,
                    title: 'I-Smart',
                    isChosen: false
                },
                {
                    id: 6,
                    title: 'Kenxinda',
                    isChosen: false
                }
            ]
        },
        {
            id: 2,
            title: 'Price',
            isOptionOpen: false,
            menuOptions: [
                {
                    id: 1,
                    price: '20'
                },
                {
                    id: 2,
                    price: '60'
                },
                {
                    id: 3,
                    price: '120'
                },
                {
                    id: 4,
                    price: '300'
                },
                {
                    id: 5,
                    price: '600'
                }
            ],
        },
        {
            id: 3,
            title: 'Colour',
            isOptionOpen: false,
            menuOptions: [
                {
                    id: 1,
                    colourHex: '#000000',
                    color: 'black'
                },
                {
                    id: 2,
                    colourHex: '#34AADC',
                    color: 'blue'
                },
                {
                    id: 3,
                    colourHex: '#B0865B',
                    color: 'brown'
                },
                {
                    id: 4,
                    colourHex: '#F7E6A1',
                    color: 'beige'
                },
                {
                    id: 5,
                    colourHex: '#969495',
                    color: 'grey'
                },
                {
                    id: 6,
                    colourHex: '#26DC2B',
                    color: 'green'
                },
                {
                    id: 7,
                    colourHex: '#FD8603',
                    color: 'orange'        
                },
                {
                    id: 8,
                    colourHex: '#F678B0',
                    color: 'pink'
                },
                {
                    id: 9,
                    colourHex: '#F1F03F',
                    color: 'yellow'
                }
            ],
        },
        {
            id: 4,
            title: 'Type',
            isOptionOpen: false,
            menuOptions: [
                {
                    id: 1,
                    title: 'Casual'
                },
                {
                    id: 2,
                    title: 'Modern'
                },
                {
                    id: 3,
                    title: 'Traditional'
                },
                {
                    id: 4,
                    title: 'Vintage'
                },
                {
                    id: 5,
                    title: 'Western Style'
                },
            ],
        },
    ],
    brandsFilter: [],
    priceFilter: 0,
    colorFilter: '',
    typeFilter: [],
    category: ''
}

const reducerShop = (state = ShopState, action) => {
    switch (action.type) {     
        case OPEN_SHOP_FILTERS_MENU:
            return {
                ...state,
                shopFilters: state.shopFilters.map(item => {
                    if (action.itemId === item.id) return { ...item, isOptionOpen: !item.isOptionOpen }
                    return item
                })
            } 
        case OPEN_PRODUCTS_PORTION_OPTION_LIST:
            return {
                ...state,
                isProductsPortionOptionListOpen: action.status
            }    
        case CHANGE_PRODUCTS_PORTION:
            return {
                ...state,
                productsPortion: action.portion,
                productsPerRow: action.portion === 16 ? 4 : action.portion === 25 ? 5 : 1,
                productsCountMenu: state.productsCountMenu.map(item => {
                    if(item.portion === action.portion) return { ...item, chosen: true }
                    return { ...item, chosen: false }
                }),
                isSidebarShown: action.portion === 25 ? false : true
            }  
        case CHANGE_PAGE:
            debugger
            return {
                ...state,
                currentPage: action.currentPage
            }    
        case CHANGE_SIDEBAR_SHOWN_STATUS:
            return {
                ...state,
                isSidebarShown: action.status,
                currentShopPage: action.status ? 'Shop Sidebar' : 'Shop Without Sidebar',
                productsPerRow: action.status ? state.productsPerRow === 5 ? 4 : state.productsPerRow : 5,
                productsPortion: action.status ? state.productsPortion === 25 ? 16 : state.productsPortion : 25
            }   
        case CHANGE_PRICE_FILTER:
            return {
                ...state,
                priceFilter: action.price
            }              
        case SET_COLOR_FILTER:
            return {
                ...state,
                colorFilter: action.color
            } 
        case SET_BRAND:
            return {
                ...state,
                brandsFilter: action.status ? [ ...state.brandsFilter, action.brand ] : state.brandsFilter.filter(item => item !== action.brand && true)
            }
        case SET_TYPE:
            return {
                ...state,
                typeFilter: action.status ? [ ...state.typeFilter, action.val ] : state.typeFilter.filter(item => item !== action.val && true)
            }    
        case SET_CATEGORIES:
            return {
                ...state,
                category: action.category
            }
        default:
            return state
    }
}

/* Action Creators! */

export const openShopFiltersMenu = (itemId) => ({ type: OPEN_SHOP_FILTERS_MENU, itemId })

export const openProductsPortionOptionList = (status) => ({ type: OPEN_PRODUCTS_PORTION_OPTION_LIST, status })
export const changeProductsPortion = (portion) => ({ type: CHANGE_PRODUCTS_PORTION, portion })

export const changeSidebarShownStatus = (status) => ({ type: CHANGE_SIDEBAR_SHOWN_STATUS, status })

export const changePage = (currentPage) => ({ type: CHANGE_PAGE, currentPage })

export const setBrandsFilter = (brand, status) => ({ type: SET_BRAND, brand, status  })
export const changePriceFilter = (price) => ({ type: CHANGE_PRICE_FILTER, price })
export const setColorFilter = (color) => ({ type: SET_COLOR_FILTER, color })
export const setTypeFilter = (val, status) => ({ type: SET_TYPE, val, status })

export const setCategories = (category) => ({ type: SET_CATEGORIES, category })

export default reducerShop