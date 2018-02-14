import {
    ADD_ORDER_ITEM,
    SET_ORDER_DELIVERY_ADDRESS,
    SET_ORDER_CART,
    SET_ORDER_SERVICE,
    REMOVE_ORDER_ITEM,
} from './types';

export const setDeliveryAddress = (deliveryAddress) => {
    return async (dispatch) => {
        return dispatch(setOrderDeliveryAddress(deliveryAddress));
    };
};

export const setService = (service) => {
    return async (dispatch) => {
        return dispatch(setOrderService(service));
    };
};

export const addItem = (item) => {
    return async (dispatch) => {
        return dispatch(updateOrderItem(ADD_ORDER_ITEM, item));
    };
};

export const removeItem = (item) => {
    return async (dispatch) => {
        return dispatch(updateOrderItem(REMOVE_ORDER_ITEM, item));
    };
};

export const setCart = (cart) => {
    return async (dispatch) => {
        return dispatch(setOrderCart(cart));
    };
};

const setOrderDeliveryAddress = (deliveryAddress) => {
    return {
        type: SET_ORDER_DELIVERY_ADDRESS,
        deliveryAddress,
    };
};

const setOrderService = (service) => {
    return {
        type: SET_ORDER_SERVICE,
        service,
    };
};

const setOrderCart = (cart) => {
    return {
        type: SET_ORDER_CART,
        cart,
    };
};

const updateOrderItem = (type, item) => {
    return {
        type: type,
        item,
    };
};
