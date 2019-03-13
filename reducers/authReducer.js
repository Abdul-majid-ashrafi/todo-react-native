import { LOGIN, LOGOUT } from '../actions/types';

const initialState = {
    user: "",
    isLoggedIn: false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return state = {
                isLoggedIn: true,
                user: action.payload,
            }
        case LOGOUT:
            return state = {
                isLoggedIn: false,
                user: "",
            }
        default:
            return state;
    };
}


export default authReducer