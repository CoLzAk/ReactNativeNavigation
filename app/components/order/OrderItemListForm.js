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

export default class OrderItemListForm extends Component {
    constructor(props) {
        super(props);
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
