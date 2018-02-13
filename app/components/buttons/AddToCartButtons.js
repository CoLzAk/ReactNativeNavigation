import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Badge,
    Button,
    Text,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    addToCartButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});

import { OrderActions } from '../../actions';

export default class AddToCartButtons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.item.quantity,
        }
    }

    decreaseQuantity() {
        if (this.state.quantity === 0) {
            console.log('Not under 0');

            return;
        }

        this.setState({
            state: this.state.quantity--,
        });

        // this.props.dispatch(OrderActions.removeItem(this.props.item));

        // this.props.onQuantityChange('foo', 'bar');
    }

    increaseQuantity() {
        this.setState({
            state: this.state.quantity++,
        });

        // this.props.dispatch(OrderActions.addItem(this.props.item));
    }

    render() {
        return (
            <View style={ styles.addToCartButtons }>
                <Button iconLeft
                        light
                        small
                        onPress={ () => this.decreaseQuantity() }>
                    <MaterialCommunityIcons name='minus' />
                </Button>

                <Text> </Text>

                <Badge primary>
                    <Text>{ this.state.quantity }</Text>
                </Badge>

                <Text> </Text>

                <Button iconLeft
                        light
                        small
                        onPress={ () => this.increaseQuantity() }>
                <MaterialCommunityIcons name='plus' />
                </Button>
            </View>
        )
    }
}
