import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import {
    Button,
} from 'react-native-elements';

import t from 'tcomb-form-native';

import {
    UserActions,
} from '../actions';

const Form = t.form.Form;
const PlaceForm = t.struct({
    address: t.String,
});

export default class PlaceAdd extends Component {
    constructor(props) {
        super(props);

        console.log(props);
    }

    autoComplete() {
        // const place = this.refs.placeData.getValue();
        // this.props.geocode(search.slug);
    }

    submit() {
        const place = this.refs.placeData.getValue();
        this.props.dispatch(UserActions.addPlace(this.props.currentUser, place));
    }

    render() {
        return (
            <View>
                <Form onChange={ () => this.autoComplete() }
                      ref="placeData"
                      type={ PlaceForm } />

                <Button block
                        primary
                        onPress={ () => this.submit() }>
                    <Text>form.button.add_place</Text>
                </Button>
            </View>
        )
    }
}