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

    static async register(registerData) {
        // api call to check if user already exists
        let user = await AuthenticationService.getUserByCredentials({ email: registerData.email, password: registerData.password });

        if (user.length > 0) {
            throw new Error('user already exists');
        }

        user = new User(registerData.email, registerData.password);

        // api call to create user
        let users = await StorageService.getItem('users');
        users = JSON.parse(users);

        if (users === null) {
            users = [];
        }

        users.push(user);

        await StorageService.setItem('users', JSON.stringify(users));

        // 201 : return created user
        return { email: registerData.email, password: registerData.password };
    }

    static async getUserByCredentials(credentials) {
        let users = await StorageService.getItem('users');
        users = JSON.parse(users);

        if (users === null) {
            return [];
        }

        return users.filter((user) => {
            return credentials.email === user.email && credentials.password === user.password
        });
    }

    static async saveCredentials(credentials) {
        await StorageService.setItem('credentials', JSON.stringify(credentials));

        return this;
    }

    static async removeCredentials() {
        return await StorageService.removeItem('credentials');
    }

    static async getCredentials() {
        const credentials = await StorageService.getItem('credentials');

        return JSON.parse(credentials);
    }

    static async isLoggedIn() {
        const credentials = await AuthenticationService.getCredentials();

        return credentials !== null;
    }
}