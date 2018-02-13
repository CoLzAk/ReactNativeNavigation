import {
    SET_ORDER_DELIVERY_ADDRESS,
    SET_ORDER_SERVICE,
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
