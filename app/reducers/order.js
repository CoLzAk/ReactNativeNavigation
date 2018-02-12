import { createReducer } from '../helpers';

import {
    ORDER_PLACE_SET,
} from '../actions/types';

const initialState = {
    place: null,
};

export const order = createReducer(initialState, {
    [ORDER_PLACE_SET](state, action) {
        return {
            ...state,
            place: action.place,
        };
    },
});
