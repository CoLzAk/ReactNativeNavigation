import {
    NAVIGATE_TO_LOGIN,
    NAVIGATE_TO_REGISTER
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
