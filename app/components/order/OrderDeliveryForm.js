import React, { Component } from 'react';

import {
    View,
} from 'react-native';

import {
    Button,
    Text,
} from 'native-base';

import {
    OrderDeliveryAddFormComponent,
    OrderDeliveryChoiceFormComponent,
} from './';

export default class OrderDeliveryForm extends Component {
    constructor(props) {
        super(props);

        this.userPlaces = this.props.userPlaces;

        this.state = {
            placeAdd: this.userPlaces.length === 0,
            selectedPlace: null,
        }
    }

    toggleForm() {
        this.setState({
            placeAdd: !this.state.placeAdd,
        });
    }

    setSelectedPlace(place) {
        this.setState({
            selectedPlace: place,
        });
    }

    renderPlaceAddForm() {
        return (
            <View>
                <OrderDeliveryAddFormComponent setSelectedPlace={ this.setSelectedPlace.bind(this) } />
                {
                    (this.userPlaces.length > 0) ?
                        <Button transparent
                                onPress={() => this.toggleForm()}>
                            <Text>form.order.delivery_address.choose</Text>
                        </Button> :
                        null
                }
            </View>
        )
    }

    renderPlaceListForm() {
        return (
            <View>
                <OrderDeliveryChoiceFormComponent places={ this.userPlaces } />

                <Button transparent
                        onPress={ () => this.toggleForm() }>
                    <Text>form.order.delivery_address.add</Text>
                </Button>
            </View>
        )
    }

    submit() {
        // save user place if not exists
        // go to step 2
    }

    render() {
        const form = this.state.placeAdd === true ? this.renderPlaceAddForm() : this.renderPlaceListForm();

        return (
            <View>
                <Text>form.order.delivery_address</Text>

                { form }

                <Button block
                        disabled={ this.state.selectedPlace === null }
                        onPress={ () => this.submit() }>
                    <Text>form.order.delivery.submit</Text>
                </Button>
            </View>
        )
    }
}