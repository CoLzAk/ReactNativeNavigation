import React, { Component } from 'react';

import user from '../assets/images/user.png';

import {
    Body,
    Button,
    Card,
    CardItem,
    Left,
    Text,
    Thumbnail,
} from 'native-base';

export default class UserCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={ user } />
                        <Body>
                            <Text>{ this.props.user.fullName }</Text>
                            <Text note>April 15, 2016</Text>
                        </Body>
                    </Left>
                </CardItem>
            </Card>
        )
    }
}