import { createReducer } from '../helpers';

import {
    SET_ORDER_DELIVERY_ADDRESS,
    SET_ORDER_SERVICE,
} from '../actions/types';
import { Order } from '../models';

const initialState = new Order();

export const order = createReducer(initialState, {
    [SET_ORDER_DELIVERY_ADDRESS](state, action) {
        return {
            ...state,
            deliveryAddress: action.deliveryAddress,
        };
    },

    [SET_ORDER_SERVICE](state, action) {
        return {
            ...state,
            service: action.service,
        };
    },
});
