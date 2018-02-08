import { Form } from './';
import t from 'tcomb-form-native';
import template from '../../helpers/form';


export default class PlaceChoice {
    constructor(
        places = [],
    ) {
        this.places = places;
    }

    getType() {
        const placeEnums = this.getPlaceEnums();

        return t.struct({
            places: t.enums(placeEnums),
            place: t.String,
        });
    }

    getOptions() {
        return {
            fields: {
                place: {
                    template: template.textbox,
                }
            }
        }
    }

    getPlaceEnums() {
        let placeEnums = {};

        this.places.map(place => {
            placeEnums[place.id] = place.name;
        });

        return placeEnums;
    }
}