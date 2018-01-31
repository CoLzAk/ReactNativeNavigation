import { createReducer } from '../helpers';

import {
    LOGIN_SUCCEEDED,
    LOGOUT,
} from '../actions/types';

const initialState = {
    isLoggedIn: false,
};

export const authentication = createReducer(initialState, {
    [LOGIN_SUCCEEDED](state) {
        return {
            ...state,
            isLoggedIn: true,
        };
    },

    [LOGOUT](state) {
        return {
            ...state,
            isLoggedIn: false,
        };
    },
});
