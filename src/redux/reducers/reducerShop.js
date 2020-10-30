import templateBanner from '../../images/photoTemplate.jpg'

const ON_POPULAR_PRODUCT_MOVE = 'ON_POPULAR_PRODUCT_MOVE'
const REMOVE_POPULAR_PRODUCTS_HOVERED_STATUS = 'REMOVE_POPULAR_PRODUCTS_HOVERED_STATUS'

const ShopState = {
    currentShopPage: 'Shop Without Sidebar',
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
        }
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
        default:
            return state
    }
}

/* Action Creators! */

export const onPopularProductMove = (itemId) => ({ type: ON_POPULAR_PRODUCT_MOVE, itemId })
export const removePopularProductsHoveredStatus = () => ({ type: REMOVE_POPULAR_PRODUCTS_HOVERED_STATUS })

export default reducerShop