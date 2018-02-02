import { AsyncStorage } from 'react-native';

export default class StorageService {
    static async getItem(key) {
        try {
            return await AsyncStorage.getItem(key);
        } catch (error) {
            // Error saving data
            console.error('an error occurred getting data in local storage');
        }
    }

    static async removeItem(key) {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            // Error deleting data
            console.error('an error occurred removing data in local storage : ', error);
        }
    }

    static async setItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            // Error saving data
            console.error('an error occurred saving data in local storage');
        }
    }
}
