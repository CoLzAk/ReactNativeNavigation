import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import {
    Text,
} from 'react-native-elements';

import {
    OrderDeliveryFormComponent,
} from '../components/order';

class Order extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>form.order.new</Text>

                <OrderDeliveryFormComponent { ...this.props } />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.application.currentUser,
        userPlaces: state.user.places,
        order: state.order,
    };
}

export default connect(
    mapStateToProps,
)(Order);
