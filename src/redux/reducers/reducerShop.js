import React from 'react'
import templateBanner from '../../images/photoTemplate.jpg'
import BrandsMenu from '../../components/Shop/SidebarComponents/ShopFilter/FilterMenus/BrandsMenu/brandsMenuContainer'
import PriceMenu from '../../components/Shop/SidebarComponents/ShopFilter/FilterMenus/PriceMenu/priceMenuContainer'
import ColourMenu from '../../components/Shop/SidebarComponents/ShopFilter/FilterMenus/ColourMenu/colourMenuContainer'
import TypeMenu from '../../components/Shop/SidebarComponents/ShopFilter/FilterMenus/TypeMenu/TypeMenuContainer'

const ON_POPULAR_PRODUCT_MOVE = 'ON_POPULAR_PRODUCT_MOVE'
const REMOVE_POPULAR_PRODUCTS_HOVERED_STATUS = 'REMOVE_POPULAR_PRODUCTS_HOVERED_STATUS'

const OPEN_SHOP_FILTERS_MENU = 'OPEN_SHOP_FILTERS_MENU'

const OPEN_PRODUCTS_PORTION_OPTION_LIST = 'OPEN_PRODUCTS_PORTION_OPTION_LIST'
const CHANGE_PRODUCTS_PORTION = 'CHANGE_PRODUCTS_PORTION'

const CHANGE_SIDEBAR_SHOWN_STATUS = 'CHANGE_SIDEBAR_SHOWN_STATUS'

const ShopState = {
    currentShopPage: 'Shop Without Sidebar',
    isSidebarShown: false,
    productsPortion: 25,
    productsPerRow: 5,
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
    popularProducts: [
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
            isInStock: true,
            isCompare: false
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
            isInStock: true,
            isCompare: false
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
            isInStock: true,
            isCompare: false
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
            isInStock: true,
            isCompare: false
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
            isInStock: true,
            isCompare: false
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
            isInStock: true,
            isCompare: false
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
            isInStock: true,
            isCompare: false
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
            isInStock: true,
            isCompare: false
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
            isInStock: true,
            isCompare: false
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
            isInStock: true,
            isCompare: false
        },{
            id: 11,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false
        },
        {
            id: 12,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false
        },
        {
            id: 13,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false
        },
        {
            id: 14,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false
        },
        {
            id: 15,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false
        },
        {
            id: 16,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false
        },
        {
            id: 17,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false
        },
        {
            id: 18,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false
        },
        {
            id: 19,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false
        },
        {
            id: 20,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false
        },
        {
            id: 21,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false
        },
        {
            id: 22,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false
        },
        {
            id: 23,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false
        },
        {
            id: 24,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false
        },
        {
            id: 25,
            photo: templateBanner,
            title: 'Product Title',
            price: '665.00',
            rating: 5,
            isNew: false,
            isSale: false,
            hovered: false, 
            like: false,
            isInCart: false,
            isInStock: true,
            isCompare: false
        },
    ],
    shopCategories: [
        {
            id: 1,
            title: 'Fashion Clothing',
            productsCount: 128,
            isAdded: true
        },
        {
            id: 2,
            title: 'Mobile Phones',
            productsCount: 89,
            isAdded: true
        },
        {
            id: 3,
            title: 'Electronics & Hitech',
            productsCount: 205,
            isAdded: true
        },
        {
            id: 4,
            title: 'Foods & Fruits',
            productsCount: 118,
            isAdded: true
        },
        {
            id: 5,
            title: 'Beauty & Health',
            productsCount: 45,
            isAdded: true
        },
        {
            id: 6,
            title: 'Shoes & Bags',
            productsCount: 23,
            isAdded: true
        },
        {
            id: 7,
            title: 'Decors & Home',
            productsCount: 19,
            isAdded: true
        },
        {
            id: 8,
            title: 'Sports & Outerwear',
            productsCount: 34,
            isAdded: true
        }
    ],
    shopFilters: [
        {
            id: 1,
            title: 'Brands',
            isOptionOpen: false,
            menu: <BrandsMenu />,
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
            price: 50,
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
            menu: <PriceMenu />
        },
        {
            id: 3,
            title: 'Colour',
            isOptionOpen: false,
            // installedColour: "#000000",
            menuOptions: [
                {
                    id: 1,
                    colourHex: '#000000'
                },
                {
                    id: 2,
                    colourHex: '#34AADC'
                },
                {
                    id: 3,
                    colourHex: '#B0865B'
                },
                {
                    id: 4,
                    colourHex: '#F7E6A1'
                },
                {
                    id: 5,
                    colourHex: '#969495'
                },
                {
                    id: 6,
                    colourHex: '#26DC2B'
                },
                {
                    id: 7,
                    colourHex: '#FD8603'
                },
                {
                    id: 8,
                    colourHex: '#F678B0'
                },
                {
                    id: 9,
                    colourHex: '#F1F03F'
                }
            ],
            menu: <ColourMenu />
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
            menu: <TypeMenu />
        },
    ]
}

const reducerShop = (state = ShopState, action) => {
    switch (action.type) {     
        case ON_POPULAR_PRODUCT_MOVE:
            return {
                ...state,
                popularProducts: state.popularProducts.map(item => {
                    if(item.id === action.itemId) return { ...item, hovered: true }
                    return { ...item, hovered: false }
                })
            }
        case REMOVE_POPULAR_PRODUCTS_HOVERED_STATUS:
            return {
                ...state,
                popularProducts: state.popularProducts.map(item => {
                    return { ...item, hovered: false }
                })
            } 
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
        case CHANGE_SIDEBAR_SHOWN_STATUS:
            return {
                ...state,
                isSidebarShown: action.status,
                currentShopPage: action.status ? 'Shop Sidebar' : 'Shop Without Sidebar',
                productsPerRow: action.status ? state.productsPerRow === 5 ? 4 : state.productsPerRow : 5,
                productsPortion: action.status ? state.productsPortion === 25 ? 16 : state.productsPortion : 25
            }            
        default:
            return state
    }
}

/* Action Creators! */

export const onPopularProductMove = (itemId) => ({ type: ON_POPULAR_PRODUCT_MOVE, itemId })
export const removePopularProductsHoveredStatus = () => ({ type: REMOVE_POPULAR_PRODUCTS_HOVERED_STATUS })

export const openShopFiltersMenu = (itemId) => ({ type: OPEN_SHOP_FILTERS_MENU, itemId })

export const openProductsPortionOptionList = (status) => ({ type: OPEN_PRODUCTS_PORTION_OPTION_LIST, status })
export const changeProductsPortion = (portion) => ({ type: CHANGE_PRODUCTS_PORTION, portion })

export const changeSidebarShownStatus = (status) => ({ type: CHANGE_SIDEBAR_SHOWN_STATUS, status })

export default reducerShop