import React, { Component } from 'react';

import { List } from 'react-native-elements';

import { Place } from './';

export default class PlaceList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const placesCollection = this.props.placesCollection;
        return (
            <List>
                {
                    placesCollection.map((place, index) => (
                        <Place place={ place } />
                    ))
                }
            </List>
        );
    }
}