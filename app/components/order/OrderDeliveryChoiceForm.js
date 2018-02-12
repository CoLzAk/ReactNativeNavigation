import React, { Component } from 'react';

import {
    Button,
    Form,
    Input,
    Item,
    Label,
    Picker,
    Text,
} from 'native-base';

export default class PlaceList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPlace: this.props.places[0],
        }
    }

    onValueChange(place) {
        this.setState({
            selectedPlace: place,
        });
    }

    render() {
        return (
            <Form ref="placeData">
                <Picker
                    mode="dropdown"
                    placeholder="Select One"
                    note={ false }
                    selectedValue={ this.state.selectedPlace }
                    onValueChange={ this.onValueChange.bind(this) }>
                    {
                        this.props.places.map((place) => {
                            return (<Item label={ place.name } value={ place } key={ place.id } />)
                        })
                    }
                </Picker>

                <Item>
                    <Input value={ this.state.selectedPlace.address } />
                </Item>
            </Form>
        );
    }
}