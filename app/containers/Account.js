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
    AuthenticationActions,
    UserActions,
} from '../actions';

import { UserCard } from '../components';


class Account extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUser();
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
    return bindActionCreators({ ...AuthenticationActions, ...UserActions }, dispatch);
}

function mapStateToProps(state) {
    return {
        currentUser: state.user.currentUser,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Account);
