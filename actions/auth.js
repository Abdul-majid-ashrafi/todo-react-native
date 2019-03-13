import { LOGIN, LOGOUT } from './types';

export const login = input => {
    return {
        type: LOGIN,
        payload: input
    }
}

export const logOut = () => {
    return {
        type: LOGOUT
    }
}