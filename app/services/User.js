import { AuthenticationService } from './';

export default class UserService {
    getUser() {
        return AuthenticationService
            .getCredentials()
            .then((credentials) => {
                return AuthenticationService
                    .getUserByCredentials(credentials);
            })
            .then((user) => {
                return user;
            });
    }
}