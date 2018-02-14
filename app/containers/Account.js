import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Body,
    Button,
    Container,
    Content,
    List,
    ListItem,
    Right,
    Text,
    Thumbnail,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    UserActions,
    SecurityActions,
} from '../actions';

import user from '../assets/images/user.png';

class Account extends Component {
    constructor(props) {
        super(props);
    }

    logout() {
        this.props.logout();
    }

    render() {
        return (
            <Container>
                <Content>
                    <Body>
                    <Thumbnail large source={ user } />
                    <Text>John Doe</Text>
                    <Text>Membre depuis le 15/10/2017</Text>
                    </Body>

                    <List>
                        <ListItem>
                            <Body>
                            <Text>Mes adresses de livraison</Text>
                            </Body>
                            <Right>
                                <MaterialCommunityIcons name="chevron-right" />
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Body>
                            <Text>Mes moyen de paiement</Text>
                            </Body>
                            <Right>
                                <MaterialCommunityIcons name="chevron-right" />
                            </Right>
                        </ListItem>
                    </List>

                    <Button onPress={ () => { this.logout(); } }
                            block
                            primary>
                        <Text>action.logout</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...SecurityActions,
        ...UserActions,
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        currentUser: state.application.currentUser,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Account);
