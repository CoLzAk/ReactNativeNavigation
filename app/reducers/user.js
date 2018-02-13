import { createReducer } from '../helpers';

import {
    GET_USER_DELIVERY_ADDRESSES,
} from '../actions/types';

const initialState = {
    deliveryAddresses: [],
};

export const user = createReducer(initialState, {
    [GET_USER_DELIVERY_ADDRESSES](state, action) {
        return {
            ...state,
            deliveryAddresses: action.deliveryAddresses,
        };
    },
});
