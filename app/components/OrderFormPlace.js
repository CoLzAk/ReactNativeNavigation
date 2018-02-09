import React, { Component } from 'react';

import {
    View,
} from 'react-native';

import {
    Button,
    Text,
} from 'native-base';

import t from 'tcomb-form-native';

import { OrderActions } from '../actions';

import {
    PlaceChoiceForm,
} from '../models/forms';

const Form = t.form.Form;

export default class OrderFormPlace extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
        };

        this.placeChoiceForm = new PlaceChoiceForm(this.props.places);
    }

    submit() {
        const placeChoiceData = this.refs.placeChoiceData.getValue();

        if (placeChoiceData === null) {
            return;
        }

        return this.props.dispatch(OrderActions.choosePlace(placeChoiceData));
    }

    render() {
        return (
            <View>
                <Text>form.order.place_choice</Text>

                <Form ref="placeChoiceData"
                      type={ this.placeChoiceForm.getType() } />

                <Button block
                        primary
                        onPress={ () => this.submit() }>
                    <Text>form.button.add_place</Text>
                </Button>
            </View>
        )
    }
}