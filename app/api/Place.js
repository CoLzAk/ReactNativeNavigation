import {
    StorageService,
} from '../services';

import { User } from '../models';

const fakePlacesCollection = [
    {
        address: 'Bordeaux',
    }, {
        address: 'Paris',
    }, {
        address: 'Toulouse',
    }, {
        address: 'Marseille',
    }, {
        address: 'Lyon',
    },
];

export default class PlaceApi {
    geocode(slug) {
        return fakePlacesCollection.filter((place) => {
            console.log(place.address, place.address.includes(slug));
            return place.address.search(slug) > -1;
        });
    }
}