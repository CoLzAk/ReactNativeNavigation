import { createReducer } from '../helpers';

import {
    FETCH_CURRENT_USER,
    LOGIN_SUCCEEDED,
    LOGOUT,
} from '../actions/types';

const initialState = {
    credentials: null,
    currentUser: null,
};

export const application = createReducer(initialState, {
    [FETCH_CURRENT_USER](state, action) {
        return {
            ...state,
            currentUser: action.user,
        };
    },

    [LOGIN_SUCCEEDED](state, action) {
        return {
            ...state,
            credentials: action.credentials,
        };
    },

    [LOGOUT](state) {
        return {
            ...state,
            credentials: null,
            currentUser: null,
        };
    },
});
