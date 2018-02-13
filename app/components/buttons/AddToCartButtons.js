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

export default class AddToCartButtons extends Component {
    constructor(props) {
        super(props);
    }

    decreaseQuantity() {
        if (this.props.item.quantity === 0) {
            console.log('Not under 0');

            return;
        }

        return this.props.item.quantity--;
    }

    increaseQuantity() {
        return this.props.item.quantity++;
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
                    <Text>{ this.props.item.quantity }</Text>
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
