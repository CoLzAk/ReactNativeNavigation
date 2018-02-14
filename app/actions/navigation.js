import {
    NAVIGATE_TO_LOGIN,
    NAVIGATE_TO_REGISTER,
    NAVIGATE_TO_CART,
} from './types';

export const navigateToLogin = () => {
    return {
        type: NAVIGATE_TO_LOGIN,
    };
};

export const navigateToRegister = () => {
    return {
        type: NAVIGATE_TO_REGISTER,
    };
};

export const navigateToCart = () => {
    return {
        type: NAVIGATE_TO_CART,
    }
}
