import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Button,
    Container,
    Content,
    Text,
} from 'native-base';

import {
    UserActions,
    SecurityActions,
} from '../actions';

import { UserCard } from '../components';


class Account extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    logout() {
        this.props.logout();
    }

    render() {
        if (this.props.currentUser === null) {
            return null;
        }

        return (
            <Container>
                <Content padder>
                    <UserCard user={ this.props.currentUser } />

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
