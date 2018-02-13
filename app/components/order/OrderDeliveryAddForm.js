import React, { Component } from 'react';
import { View } from 'react-native';

import {
    Form,
    Input,
    Item,
    Label,
    List,
    ListItem,
    Text
} from 'native-base';

import { PlaceApi } from '../../api';

export default class OrderDeliveryAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: '',
            places: [],
        };
    }

    async autoComplete(slug) {
        this.setState({
            address: slug,
        });

        const placeApi = new PlaceApi();
        const places = await placeApi.geocode(slug);

        this.setState({
            places: places,
        });
    }

    onPlaceChange(place) {
        this.setState({
            address: place.address,
            places: [],
        });

        this.props.setDeliveryAddress(place);
    }

    render() {
        return (
            <View>
                <Form ref="placeData">
                    <Item floatingLabel>
                        <Label>place.search</Label>
                        <Input onChangeText={ (slug) => { this.autoComplete(slug) } } value={ this.state.address }/>
                    </Item>

                    <List dataArray={ this.state.places }
                          renderRow={(place) =>
                              <ListItem onPress={ this.onPlaceChange.bind(this, place) }>
                                  <Text>{ place.address }</Text>
                              </ListItem>
                          }>
                    </List>
                </Form>
            </View>
        )
    }
}