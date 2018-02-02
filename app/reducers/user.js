import { createReducer } from '../helpers';

import {
    FETCH_USER_PLACES,
} from '../actions/types';

const initialState = {
    places: [],
};

export const user = createReducer(initialState, {
    [FETCH_USER_PLACES](state, action) {
        return {
            ...state,
            places: action.places,
        };
    },
});