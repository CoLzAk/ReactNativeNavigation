import { createReducer } from '../helpers';

import {
    ADD_ORDER_ITEM,
    SET_ORDER_DELIVERY_ADDRESS,
    SET_ORDER_ITEMS,
    SET_ORDER_SERVICE,
    REMOVE_ORDER_ITEM,
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

    [ADD_ORDER_ITEM](state, action) {
        return {
            ...state,
            item: action.item,
        };
    },

    [REMOVE_ORDER_ITEM](state, action) {
        return {
            ...state,
            item: action.item,
        };
    },

    [SET_ORDER_ITEMS](state, action) {
        return {
            ...state,
            items: action.items,
        };
    },
});
