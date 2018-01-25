import { StorageService } from './';

import { User } from '../models';

/**
 * @TODO: Move JSON.parse / JSON.stringify logic in StorageService
 */
export default class AuthenticationService {
    static login(credentials) {
        // api call
        return AuthenticationService.saveCredentials(credentials);
    }

    static logout() {
        return AuthenticationService.removeCredentials();
    }

    static register(registerData) {
        // api call to check if user already exists
        let user = AuthenticationService.getUserByCredentials({ email: registerData.email, password: registerData.password });

        if (user.length > 0) {
            throw new Error('user already exists');
        }

        user = new User(registerData.email, registerData.password);

        // api call to create user
        return StorageService
            .getItem('users')
            .then((users) => {
                users = JSON.parse(users);

                if (users === null) {
                    users = [];
                }

                users.push(user);

                return StorageService
                    .setItem('users', JSON.stringify(users));
            })
            .then(() => {
                // 201 : return user
                return { email: registerData.email, password: registerData.password };
            });
    }

    static getUserByCredentials(credentials) {
        return StorageService
            .getItem('users')
            .then((users) => {
                users = JSON.parse(users);

                if (users === null) {
                    return [];
                }

                return users.filter((user) => {
                    console.log('user > ', user);
                    return credentials.email === user.email && credentials.password === user.password
                });
            });
    }

    static checkLogin() {
        return StorageService
            .getItem('users')
            .then((users) => {
                return JSON.parse(users);
            });
    }

    static saveCredentials(credentials) {
        return StorageService
            .setItem('credentials', JSON.stringify(credentials))
            .then(() => {
                return credentials;
            });
    }

    static removeCredentials() {
        return StorageService
            .removeItem('credentials');
    }

    static getCredentials() {
        return StorageService
            .getItem('credentials')
            .then((credentials) => {
                return JSON.parse(credentials);
            });
    }

    static async isLoggedIn() {
        return AuthenticationService
            .getCredentials((credentials) => {
                return credentials !== null;
            });
    }
}