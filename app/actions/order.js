import {
    ORDER_PLACE_SET,
} from './types';

export const setPlace = (place) => {
    return async (dispatch) => {
        return dispatch(orderPlaceSet(place));
    };
};

const orderPlaceSet = (place) => {
    return {
        type: ORDER_PLACE_SET,
        place,
    };
};

