import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Body,
    Container,
    Content,
    H1,
    List,
    ListItem,
    Right,
    Text,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { SecurityActions } from '../actions';

class OrderHistory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text> </Text>
                    <Body>
                        <H1>Mes commandes</H1>
                    </Body>


                    <List>
                        <ListItem icon>
                            <Body>
                                <Text>Commande du 14/02/2018</Text>
                            </Body>
                            <Right>
                                <MaterialCommunityIcons name="chevron-right" />
                            </Right>
                        </ListItem>

                        <ListItem icon>
                            <Body>
                                <Text>Commande du 12/01/2018</Text>
                            </Body>
                            <Right>
                                <MaterialCommunityIcons name="chevron-right" />
                            </Right>
                        </ListItem>

                        <ListItem icon>
                            <Body>
                                <Text>Commande du 12/12/2017</Text>
                            </Body>
                            <Right>
                                <MaterialCommunityIcons name="chevron-right" />
                            </Right>
                        </ListItem>

                        <ListItem icon>
                            <Body>
                                <Text>Commande du 24/11/2017</Text>
                            </Body>
                            <Right>
                                <MaterialCommunityIcons name="chevron-right" />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(SecurityActions, dispatch);
}

export default connect(
    null,
    mapDispatchToProps,
)(OrderHistory);
