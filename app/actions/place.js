import {
    GEOCODE_SUCCEEDED,
} from './types';

import { PlaceApi } from '../api';

export const geocode = (slug) => {
    return async (dispatch) => {
        const placeApi = new PlaceApi();
        const places = await placeApi.geocode(slug);

        return dispatch(geocodeSucceeded(places));
    };
};

const geocodeSucceeded = (places) => {
    return {
        type: GEOCODE_SUCCEEDED,
        places,
    };
};

