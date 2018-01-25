import {
    FETCH_USER,
} from './types';
import { UserService } from '../services';

export function getUser() {
    return (dispatch) => {
        let userService = new UserService();

        return userService
            .getUser()
            .then((user) => {
                dispatch(fetchUser(user[0]));
            });
    };
}

function fetchUser(user) {
    return {
        type: FETCH_USER,
        user,
    };
}
