import React, { Component } from 'react';

import {
    Body,
    Container,
    Content,
    List,
    ListItem,
    Text,
    Thumbnail,
} from 'native-base';

import { AddToCartButtonsComponent } from '../buttons';

import { OrderActions } from '../../actions';

export default class OrderItemListForm extends Component {
    constructor(props) {
        super(props);
    }

    onQuantityChange(quantity, item) {
        let items = this.props.items.map((currentItem) => {
            if (item.name === currentItem.name) {
                currentItem.quantity = quantity;
            }

            return currentItem;
        });

        items = items.filter((item) => {
            return item.quantity > 0;
        });

        this.setItems(items);
    }

    setItems(items) {
        this.props.dispatch(OrderActions.setItems(items));
    }

    render() {
        return (
            <List>
                {
                    this.props.items.map((item, index) => {
                        return (
                            <ListItem key={ index }>
                                <Thumbnail square size={80} source={ item.thumbnail } />

                                <Body>
                                    <Text>{ item.name }</Text>
                                    <Text note>{ item.price }€</Text>
                                </Body>

                                <AddToCartButtonsComponent item={ item } />
                            </ListItem>
                        )
                    })
                }

            </List>
        );
    }
}
