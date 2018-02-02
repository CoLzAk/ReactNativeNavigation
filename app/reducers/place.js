import { createReducer } from '../helpers';

import {
    GEOCODE_SUCCEEDED,
} from '../actions/types';

const initialState = {
    collection: [],
};

export const place = createReducer(initialState, {
    [GEOCODE_SUCCEEDED](state, action) {
        return {
            ...state,
            collection: action.places,
        };
    },
});
