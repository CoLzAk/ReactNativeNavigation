import {
    StorageService,
} from '../services';

import { User } from '../models';

const fakePlacesCollection = [
    {
        name: 'Bordeaux',
    }, {
        name: 'Paris',
    }, {
        name: 'Toulouse',
    }, {
        name: 'Marseille',
    }, {
        name: 'Lyon',
    },
];

export default class PlaceApi {
    geocode(slug) {
        return fakePlacesCollection.filter((place) => {
            console.log(place.name, place.name.includes(slug));
            return place.name.search(slug) > -1;
        });
    }
}