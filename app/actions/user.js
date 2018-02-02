import {
    FETCH_CURRENT_USER,
    FETCH_USER_PLACES,
} from './types';

import { UserApi } from '../api';
import { User } from '../models';

export const getCurrentUser = (credentials) => {
    return async (dispatch) => {
        let user = User.constructFromCredentials(credentials);
        const userApi = new UserApi();

        user = await userApi.getOne(user);

        return dispatch(fetchCurrentUser(user));
    };
};

export const getPlaces = (user) => {
    return async (dispatch) => {
        const userApi = new UserApi();
        const places = await userApi.getPlaces(user);

        return dispatch(fetchUserPlaces(places));
    }
};

const fetchCurrentUser = (user) => {
    return {
        type: FETCH_CURRENT_USER,
        user,
    };
};

const fetchUserPlaces = (places) => {
    return {
        type: FETCH_USER_PLACES,
        places,
    };
};

