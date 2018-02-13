import React, { Component } from 'react';

import { View } from 'react-native';
import {
    Button,
    Item,
    Picker,
    Text,
} from 'native-base';

import { OrderItemListFormComponent } from './';
import {
    OrderActions,
} from '../../actions';

import { Order } from '../../models';

import { OrderItemCollection } from '../../models';
import { OrderService } from '../../services';

export default class OrderServiceForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            service: null,
            items: [],
        };

        this.services = [{
            value: Order.IRONING_SERVICE,
            label: 'form.order.service.ironing',
        }, {
            value: Order.DRY_CLEANING_SERVICE,
            label: 'form.order.service.dry_cleaning',
        }];
    }

    onServiceChange(service) {
        const availableItems = OrderService.getItemsForService(service);
        console.log(availableItems);
        const items = OrderItemCollection.initialize(availableItems);
        console.log(items);


        this.setState({
            service: service,
            items: items,
        });

        console.log(this.state);

        this.props.dispatch(OrderActions.setService(service));

    }

    render() {
        return (
            <View>
                <Text>form.order.service</Text>

                <Picker
                    mode="dropdown"
                    placeholder="Choose one"
                    note={ false }
                    selectedValue={ this.state.service }
                    onValueChange={ this.onServiceChange.bind(this) }>
                    <Item label="-" value={ null } />
                    {
                        this.services.map((service, index) => {
                            return (<Item label={ service.label } value={ service.value } key={ index } />)
                        })
                    }
                </Picker>

                <OrderItemListFormComponent items={ this.state.items } />
            </View>
        )
    }
}
