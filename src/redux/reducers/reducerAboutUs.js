import MemberOne from '../../images/avatar.jpg'

const TOGGLE_IS_DEPARTMENTS_MENU_OPEN_STATUS ='TOGGLE_IS_DEPARTMENTS_MENU_OPEN_STATUS'

const aboutUsState = {
    navigationLinks: [
        {
            id: 1,
            path: '/',
            title: 'Home'
        },
        {
            id: 2,
            path: '/',
            title: 'Shop'
        },
        {
            id: 3,
            path: '/',
            title: 'Fashion'
        },
        {
            id: 4,
            path: '/',
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
            title: 'Features'
        },
        {
            id: 7,
            path: '/',
            title: 'Blog'
        }
    ],
    counter: {
        totalEmployees: '142',
        satisfaction:  '99%',
        cupsOfCoffee: '4214',
        buyersRating: '4.7'
    },
    team: [
        {
            id: 1,
            photo: MemberOne,
            name: 'Denis Grigorov',
            position: 'Godness',
            facebook: '',
            google: '',
            linkedIn: '',
            twitter: ''
        }
    ],
    companyPhone: '1-800-777-7889',
    isDepartmentsMenuOpen: false
}

const reducerAboutUS = (state = aboutUsState, action) => {
    switch (action.type) {
        case TOGGLE_IS_DEPARTMENTS_MENU_OPEN_STATUS:
            return {
                ...state,
                isDepartmentsMenuOpen: action.status
            }
        default:
            return state
    }
}

/* Action Creators! */

export const setIsDepartmentsMenuOpenStatus = (status) => ({ type: TOGGLE_IS_DEPARTMENTS_MENU_OPEN_STATUS, status })


export default reducerAboutUS