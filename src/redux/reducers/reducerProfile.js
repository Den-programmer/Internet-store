import customerUser_1 from '../../images/reviwers/girl.jpg'

const ProfileState = {
    name: 'User Name',
    userPhoto: customerUser_1,
    rating: 5
}

const reducerProfile = (state = ProfileState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

/* Action Creators! */

export default reducerProfile