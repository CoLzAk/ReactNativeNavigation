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
        const placeApi = new PlaceApi();
        const places = await placeApi.geocode(slug);


        this.setState({
            address: slug,
            places: places,
        });
    }

    selectPlace(place) {
        this.setState({
            address: place.address,
            places: [],
        });

        this.props.setSelectedPlace(place);
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
                              <ListItem onPress={ this.selectPlace.bind(this, place) }>
                                  <Text>{ place.address }</Text>
                              </ListItem>
                          }>
                    </List>
                </Form>
            </View>
        )
    }
}