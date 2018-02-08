import React, { Component } from 'react';

import {
    View,
} from 'react-native';

import {
    Button,
    Text,
    FormLabel,
    FormInput,
    FormValidationMessage,
} from 'react-native-elements';

import t from 'tcomb-form-native';

import {
    PlaceChoiceForm,
} from '../models/forms';

const Form = t.form.Form;

export default class OrderFormPlace extends Component {
    constructor(props) {
        super(props);

        this.placeForm = new PlaceChoiceForm(this.props.places);
    }

    render() {
        return (
            <View>

                <FormLabel>Name</FormLabel>
                <FormInput />
                <FormValidationMessage>Error message</FormValidationMessage>

                <Text>form.order.place_choice</Text>

                <Form ref="placeData"
                      type={ this.placeForm.getType() }
                      options={ this.placeForm.getOptions() } />

                <Button
                    text='BUTTON'
                    textStyle={{ fontWeight: "700" }}
                    clear
                />
            </View>

        )
    }
}