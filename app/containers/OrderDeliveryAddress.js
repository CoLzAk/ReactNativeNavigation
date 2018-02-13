import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Button,
    Form,
    Input,
    Item,
    Label,
    List,
    ListItem,
    Picker,
    Text,
} from 'native-base';

import { OrderActions } from '../actions';

import { GeoCodingApi } from '../api';

class OrderDeliveryAddress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deliveryAddresses: this.props.deliveryAddresses[0],
            deliveryAddress: {
                address: '',
            },
            geoCodedAddresses: [],
        }
    }

    async autoCompleteAddress(slug) {
        this.setState({
            deliveryAddress: {
                address: slug,
            },
        });

        const geoCodingApi = new GeoCodingApi();
        const geoCodedAddresses = await geoCodingApi.geocode(slug);

        this.setState({
            geoCodedAddresses: geoCodedAddresses,
        });
    }

    onDeliveryAddressChange(deliveryAddress) {
        this.setState({
            deliveryAddress: deliveryAddress,
            geoCodedAddresses: [],
        });

        this.props.dispatch(OrderActions.setDeliveryAddress(deliveryAddress));
    }

    render() {
        return (
            <Form ref="placeData">
                <Picker
                    mode="dropdown"
                    placeholder="Select One"
                    note={ false }
                    selectedValue={ this.state.deliveryAddress }
                    onValueChange={ this.onDeliveryAddressChange.bind(this) }>
                    <Item label="form.order.delivery_address.new" value={ null } />
                    {
                        this.props.deliveryAddresses.map((deliveryAddress) => {
                            return (<Item label={ deliveryAddress.name } value={ deliveryAddress } key={ deliveryAddress.id } />)
                        })
                    }
                </Picker>

                <Item>
                    <Input value={ this.state.deliveryAddress.address } onChangeText={ (slug) => this.autoCompleteAddress(slug) } />
                </Item>

                <List dataArray={ this.state.geoCodedAddresses }
                      renderRow={(geoCodedAddress) =>
                              <ListItem onPress={ this.onDeliveryAddressChange.bind(this, geoCodedAddress) }>
                                  <Text>{ geoCodedAddress.address }</Text>
                              </ListItem>
                          }>
                </List>
            </Form>
        );
    }
}

function mapStateToProps(state) {
    return {
        deliveryAddresses: state.user.deliveryAddresses,
    };
}

export default connect(
    mapStateToProps,
)(OrderDeliveryAddress);
