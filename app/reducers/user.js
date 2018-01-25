import { createReducer } from '../helpers';

import {
    FETCH_USER,
} from '../actions/types';

const initialState = {
    user: null,
};

export const user = createReducer(initialState, {
    [FETCH_USER](state, action) {
        return {
            ...state,
            user: action.user,
        };
    },
});
