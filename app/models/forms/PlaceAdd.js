import t from 'tcomb-form-native';

export default class PlaceAdd {
    constructor(
        places = [],
    ) {
        this.places = places;
    }

    getType() {
        const placeEnums = this.getPlaceEnums();

        return t.struct({
            places: t.enums(placeEnums),
        });
    }

    getOptions() {
        return {}
    }

    getPlaceEnums() {
        let placeEnums = {};

        this.places.map(place => {
            placeEnums[place.id] = place.name;
        });

        return placeEnums;
    }
}