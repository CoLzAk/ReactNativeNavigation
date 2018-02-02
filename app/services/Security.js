import { StorageService } from './';
import { Credentials } from '../models';

/**
 * @TODO: Move JSON.parse / JSON.stringify logic in StorageService
 */
export default class SecurityService {
    static login(credentials) {
        // api call
        return SecurityService.saveCredentials(credentials);
    }

    static logout() {
        return SecurityService.removeCredentials();
    }

    static async saveCredentials(credentials) {
        await StorageService.setItem('credentials', JSON.stringify(credentials));

        return this;
    }

    static async removeCredentials() {
        return await StorageService.removeItem('credentials');
    }

    static async getCredentials() {
        let credentials = await StorageService.getItem('credentials');
        credentials = JSON.parse(credentials);

        if (credentials === null) {
            return null;
        }

        return Credentials.constructFromData(credentials);
    }

    static async isLoggedIn() {
        const credentials = await SecurityService.getCredentials();

        return credentials !== null;
    }
}