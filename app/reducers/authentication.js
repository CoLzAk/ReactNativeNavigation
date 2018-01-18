import { createReducer } from '../helpers';

import { AuthenticationService } from '../services';
import {
    LOGIN_REQUIRED,
    LOGIN_SUCCEEDED,
    LOGOUT,
} from '../actions/types';

const initialState = {
    isLoggedIn: false,
    isLoginRequired: false,
};

export const authentication = createReducer(initialState, {
    [LOGIN_SUCCEEDED](state) {
        return {
            ...state,
            isLoggedIn: true,
            isLoginRequired: false,
        };
    },
    [LOGIN_REQUIRED](state) {
        return {
            ...state,
            isLoginRequired: true,
        };
    },
    [LOGOUT](state) {
        return {
            ...state,
            isLoggedIn: false,
        };
    },
});
