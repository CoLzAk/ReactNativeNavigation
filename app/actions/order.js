import {
    ADD_ORDER_ITEM,
    SET_ORDER_DELIVERY_ADDRESS,
    SET_ORDER_ITEMS,
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

export const setItems = (items) => {
    return async (dispatch) => {
        return dispatch(setOrderItems(items));
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

const setOrderItems = (items) => {
    return {
        type: SET_ORDER_ITEMS,
        items,
    };
};

const updateOrderItem = (type, item) => {
    return {
        type: type,
        item,
    };
};

