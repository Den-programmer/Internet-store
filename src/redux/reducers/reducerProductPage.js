import customerPhoto_1 from '../../images/reviwers/girl.jpg'

const CHANGE_PRODUCT_MENU_ITEM = 'CHANGE_PRODUCT_MENU_ITEM'
const CHANGE_MENU_ITEM_CHOSEN_ID = 'CHANGE_MENU_ITEM_CHOSEN_ID'
const ADD_COMMENT = 'ADD_COMMENT' 

const ProductState = {
    menu: [
        {
            id: 1,
            title: 'Description',
            isChosen: true
        },
        {
            id: 2,
            title: 'Customer Review',
            isChosen: false
        },
        {
            id: 3,
            title: 'Additional Information',
            isChosen: false
        }
    ],
    customerReview: {
        customers: [
            {
                id: 1,
                name: 'Someone',
                photo: 'String',
                rating: 4,
                count: 1
            }
        ],
        comments: [
            {
                id: 1,
                authorName: 'Name',
                authorPhoto: customerPhoto_1,
                date: '18.02.21',
                commentText: 'Some text that has no meaning in real life...',
                rating: 5
                // You only get the picture, not the person holding it, something they don’t mention in the description, now
                // I’ve got to find my own person.
            }
        ]
    },
    menuItemChosenId: 1
}

const reducerProductPage = (state = ProductState, action) => {
    switch (action.type) {
        case CHANGE_PRODUCT_MENU_ITEM:
            return {
                ...state,
                menu: state.menu.map(item => {
                    if(item.id === action.itemId) return { ...item, isChosen: true }
                    return { ...item, isChosen: false }
                })
            }
        case CHANGE_MENU_ITEM_CHOSEN_ID:
            return {
                ...state,
                menuItemChosenId: action.itemId
            }  
        case ADD_COMMENT:
            const newComment = {
                id: state.customerReview.comments.length + 1,
                authorName: action.authorName,
                authorPhoto: action.authorPhoto,
                date: '18.02.21',
                commentText: action.text,
                rating: 5
            }
            return {
                ...state,
                customerReview: { ...state.customerReview, comments: [ ...state.customerReview.comments, newComment ] }
            }       
        default:
            return state
    }
}

/* Action Creators! */

export const changeProductMenuItem = (itemId) => ({ type: CHANGE_PRODUCT_MENU_ITEM, itemId })
export const changeMenuItemChosenId = (itemId) => ({ type: CHANGE_MENU_ITEM_CHOSEN_ID, itemId })

export const addComment = (text, authorName, authorPhoto) => ({ type: ADD_COMMENT, text, authorName, authorPhoto })

export default reducerProductPage