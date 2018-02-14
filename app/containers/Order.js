import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
    Badge,
    Body,
    Button,
    Container,
    Content,
    Footer,
    FooterTab,
    Form,
    H1,
    Input,
    Item,
    Label,
    List,
    ListItem,
    Picker,
    Text,
    Thumbnail,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { OrderActions } from '../actions';
import { GeoCodingApi } from '../api';
import {
    Cart,
    Order,
} from '../models';
import { OrderService } from '../services';

const services = [{
    value: Order.IRONING_SERVICE,
    label: 'Repassage',
}, {
    value: Order.DRY_CLEANING_SERVICE,
    label: 'Pressing',
}];
const styles = StyleSheet.create({
    addToCartButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});

class OrderContainer extends Component {
    constructor(props) {
        super(props);

        this.setInitialState();
        this.services = services;
    }

    setInitialState() {
        this.state = {
            userDeliveryAddresses: this.props.userDeliveryAddresses[0],
            geoCodingResults: [],
            order: this.props.order,
            availableItems: [],
        };
    }

    componentDidUpdate() {
        console.log('order: ', this.props.order);
    }

    addItem(item) {
        this.props.dispatch(OrderActions.addItem(item));

        const cart = this.state.order.cart.add(item);
        this.onCartChange(cart);
    }

    removeItem(item) {
        if (item.quantity === 0) {
            return;
        }

        this.props.dispatch(OrderActions.removeItem(item));

        const cart = this.state.order.cart.remove(item);
        this.onCartChange(cart);
    }

    onCartChange(cart) {
        this.setState({
            order: {
                ...this.state.order,
                cart: cart,
            },
        });

        this.props.dispatch(OrderActions.setCart(cart));
    }

    async autoCompleteAddress(slug) {
        this.setState({
            order: {
                ...this.state.order,
                deliveryAddress: {
                    address: slug,
                },
            },
        });

        const geoCodingApi = new GeoCodingApi();
        const geoCodingResults = await geoCodingApi.geocode(slug);

        this.setState({
            geoCodingResults: geoCodingResults,
        });
    }

    onDeliveryAddressChange(deliveryAddress) {
        this.setState({
            order: {
                ...this.state.order,
                deliveryAddress: deliveryAddress,
            },
            geoCodingResults: [],
        });

        this.props.dispatch(OrderActions.setDeliveryAddress(deliveryAddress));
    }

    onServiceChange(service) {
        const availableItems = OrderService.getItemsForService(service);
        const items = availableItems.map((currentItem) => {
            currentItem['quantity'] = 0;

            return currentItem;
        });

        const cart = new Cart(items);

        this.setState({
            order: {
                ...this.state.order,
                service: service,
                cart: cart,
            },
            availableItems: availableItems,
        });

        this.props.dispatch(OrderActions.setService(service));
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text> </Text>
                    <Body>
                    <H1>Nouvelle Commande</H1>
                    </Body>

                    <Text> </Text>

                    <Text>Adresse de livraison</Text>
                    <Picker
                        mode="dropdown"
                        placeholder="Select One"
                        note={ false }
                        selectedValue={ this.state.order.deliveryAddress }
                        onValueChange={ this.onDeliveryAddressChange.bind(this) }>
                        <Item label="Nouvelle adresse" value={ null } />
                        {
                            this.props.userDeliveryAddresses.map((deliveryAddress) => {
                                return (<Item key={ deliveryAddress.id }
                                              label={ deliveryAddress.name }
                                              value={ deliveryAddress }  />)
                            })
                        }
                    </Picker>
                    <Item>
                        <Input onChangeText={ (slug) => this.autoCompleteAddress(slug) }
                               onEndEditing={ (e) => this.onDeliveryAddressChange({ address: e.nativeEvent.text }) }
                               placeholder="ex. 9 rue André Darbon, 33000 Bordeaux"
                               value={ this.state.order.deliveryAddress.address } />
                    </Item>
                    <List dataArray={ this.state.geoCodingResults }
                          renderRow={(item) =>
                              <ListItem onPress={ this.onDeliveryAddressChange.bind(this, item) }>
                                  <Text>{ item.address }</Text>
                              </ListItem>
                          }>
                    </List>

                    <Text> </Text>

                    <Text>Prestation</Text>
                    <Picker
                        mode="dropdown"
                        note={ false }
                        selectedValue={ this.state.order.service }
                        onValueChange={ this.onServiceChange.bind(this) }>
                        <Item label="-" value={ null } />
                        {
                            this.services.map((service, index) => {
                                return (<Item label={ service.label } value={ service.value } key={ index } />)
                            })
                        }
                    </Picker>

                    <Text> </Text>

                    <List>
                        {
                            this.state.order.cart.items.map((item, index) => {
                                return (
                                    <ListItem key={ index }>
                                        <Thumbnail square size={80} source={ item.thumbnail } />

                                        <Body>
                                            <Text>{ item.name }</Text>
                                            <Text note>{ item.price }€</Text>
                                        </Body>

                                        <View style={ styles.addToCartButtons }>
                                            <Button iconLeft
                                                    light
                                                    small
                                                    onPress={ () => this.removeItem(item) }>
                                                <MaterialCommunityIcons name='minus' />
                                            </Button>

                                            <Text> </Text>

                                            <Badge primary>
                                                <Text>{ item.quantity }</Text>
                                            </Badge>

                                            <Text> </Text>

                                            <Button iconLeft
                                                    light
                                                    small
                                                    onPress={ () => this.addItem(item) }>
                                                <MaterialCommunityIcons name='plus' />
                                            </Button>
                                        </View>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Total: { OrderService.getTotal(this.state.order.cart.items) } €</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.application.currentUser,
        userDeliveryAddresses: state.user.deliveryAddresses,
        order: state.order,
    };
}

export default connect(
    mapStateToProps,
)(OrderContainer);
