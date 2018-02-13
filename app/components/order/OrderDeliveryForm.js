import React, { Component } from 'react';

import { View } from 'react-native';
import {
    Button,
    Text,
} from 'native-base';

import {
    OrderDeliveryAddFormComponent,
    OrderDeliveryChoiceFormComponent,
} from './';

import {
    OrderActions,
} from '../../actions';

export default class OrderDeliveryForm extends Component {
    constructor(props) {
        super(props);

        this.deliveryAddresses = this.props.deliveryAddresses;

        this.state = {
            showAddDeliveryAddressForm: this.deliveryAddresses.length === 0,
            deliveryAddress: this.props.order.deliveryAddress,
        };
    }

    toggleForm() {
        this.setState({
            showAddDeliveryAddressForm: !this.state.showAddDeliveryAddressForm,
        });
    }

    setDeliveryAddress(deliveryAddress) {
        this.setState({
            deliveryAddress: deliveryAddress,
        });
    }

    renderPlaceAddForm() {
        return (
            <View>
                <OrderDeliveryAddFormComponent setDeliveryAddress={ this.setDeliveryAddress.bind(this) } />
                {
                    (this.deliveryAddresses.length > 0) ?
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
                <OrderDeliveryChoiceFormComponent places={ this.deliveryAddresses } />

                <Button transparent
                        onPress={ () => this.toggleForm() }>
                    <Text>form.order.delivery_address.add</Text>
                </Button>
            </View>
        )
    }

    submit() {
        this.props.dispatch(OrderActions.setDeliveryAddress(this.state.deliveryAddress));
        // save user place if not exists
        // go to step 2
    }

    render() {
        const form = this.state.showAddDeliveryAddressForm === true ? this.renderPlaceAddForm() : this.renderPlaceListForm();

        return (
            <View>
                <Text>form.order.delivery_address</Text>

                { form }

                <Button block
                        disabled={ this.state.deliveryAddress === null }
                        onPress={ () => this.submit() }>
                    <Text>form.order.delivery.submit</Text>
                </Button>
            </View>
        )
    }
}
