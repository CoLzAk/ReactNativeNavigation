import {
    StorageService,
} from '../services';

import { User } from '../models';

export default class SecurityApi {
    async register(registerData) {
        // emulate api registration process
        // check if user already exists
        let user = await SecurityApi.getUserByCredentials(registerData);

        if (user !== null) {
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
        return user;
    }

    async login(loginData) {
        const user = await SecurityApi.getUserByCredentials(loginData);

        if (user === null) {
            throw new Error('account does not exists');
        }

        return user;
    }




    /**
     * TODO: to remove
     */

    static async getUserByCredentials(credentials) {
        let users = await StorageService.getItem('users');
        users = JSON.parse(users);

        if (users === null) {
            return null;
        }

        const filteredUsers =  users.filter((user) => {
            return credentials.email === user.email && credentials.password === user.password;
        });

        return filteredUsers[0];
    }
}