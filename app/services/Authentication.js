import { AsyncStorage } from 'react-native';

export default class AuthenticationService {
    constructor() {

    }

    static saveCredentials(credentials) {
        AsyncStorage.setItem('credentials', JSON.stringify(credentials));
    }
}