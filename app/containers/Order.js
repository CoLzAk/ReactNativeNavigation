import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import {
    Text,
} from 'react-native-elements';

import {
    OrderFormPlaceComponent,
} from '../components';

class Order extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <OrderFormPlaceComponent places={ this.props.userPlaces } user={ this.props.currentUser } />
                <Text>This is order main page</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.application.currentUser,
        userPlaces: state.user.places,
    };
}

export default connect(
    mapStateToProps,
)(Order);
