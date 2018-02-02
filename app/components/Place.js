import React, { Component } from 'react';

import { ListItem } from 'react-native-elements';

export default class Place extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem
                key={ this.props.place.id }
                title={ this.props.place.name }
                leftIcon="location-on"
            />
        );
    }
}