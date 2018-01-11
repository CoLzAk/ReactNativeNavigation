import { StackNavigator, TabNavigator } from 'react-navigation';

import { connect } from 'react-redux';

import {
    DetailsScreen,
    HomeScreen,
} from './app/screens';

import {
    Login,
    Register,
} from './app/containers';

// class Navigator extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//
//         );
//     }
// }

const PublicNavigator = StackNavigator({
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    },
});

const ProtectedNavigator = TabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
});

export {
    PublicNavigator,
    ProtectedNavigator,
};

// function mapStateToProps(state) {
//     return {
//         isLoggedIn: state.isLoggedIn,
//     };
// }
//
// export default connect(
//     mapStateToProps,
// )(Login);