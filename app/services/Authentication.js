import { StorageService } from './';

export default class AuthenticationService {
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

    static async hasCredentials() {
        return AuthenticationService
            .getCredentials((credentials) => {
                return credentials !== null;
            });
    }
}