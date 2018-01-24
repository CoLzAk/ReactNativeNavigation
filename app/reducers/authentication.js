import { createReducer } from '../helpers';

import { AuthenticationService } from '../services';
import {
    LOGIN_REQUESTED,
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
    [LOGIN_REQUESTED](state) {
        return {
            ...state,
            isLoggedIn: state.isLoggedIn,
        }
    },
    [LOGOUT](state) {
        return {
            ...state,
            isLoggedIn: false,
        };
    },
});
