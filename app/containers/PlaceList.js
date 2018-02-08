import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';

import { connect } from 'react-redux';

import {
    PlaceAddComponent,
    PlaceListComponent,
} from '../components';

class PlaceList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>order.form.place</Text>

                <PlaceListComponent places={ this.props.userPlaces } />
                <PlaceAddComponent { ...this.props }/>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(PlaceList);
