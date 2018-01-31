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
                console.log('UserActions.getUser > ', user);
                dispatch(fetchUser(user));
            });
    };
}

function fetchUser(user) {
    return {
        type: FETCH_USER,
        user,
    };
}
