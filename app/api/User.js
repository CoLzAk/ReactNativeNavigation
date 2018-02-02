import { StorageService } from '../services';

const userPlaces = [
    {
        id: 1,
        name: 'Domicile',
        address: 'Bordeaux',
    }, {
        id: 2,
        name: 'Bureau',
        address: 'Bordeaux',
    },
];

export default class UserApi {
    async getOne(user) {
        return await UserApi.getUserByEmail(user.email);
    }

    async getPlaces(user) {
        return await UserApi.getPlacesByUser(user.id);
    }

    /**
     * TODO: to remove
     */
    static async getUserByEmail(email) {
        let users = await StorageService.getItem('users');
        users = JSON.parse(users);

        if (users === null) {
            return null;
        }

        const filteredUsers =  users.filter((user) => {
            return email === user.email;
        });

        if (filteredUsers.length === 0) {
            return null;
        }

        return filteredUsers[0];
    }

    static async getPlacesByUser(user) {
        let places = await StorageService.getItem('places');
        places = JSON.parse(places);

        if (places === null) {
            return [];
        }

        const userPlaces =  places.filter((place) => {
            return user.id === place.user.id;
        });

        return userPlaces;
    }
}
