import {
    NAVIGATE_TO_LOGIN,
    NAVIGATE_TO_REGISTER
} from './types';

export function navigateToLogin() {
    return {
        type: NAVIGATE_TO_LOGIN,
    };
}

export function navigateToRegister() {
    return {
        type: NAVIGATE_TO_REGISTER,
    };
}

