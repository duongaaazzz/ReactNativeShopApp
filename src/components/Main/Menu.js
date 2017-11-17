import React, { Component } from 'react';
import {
        StackNavigator
} from 'react-navigation';

import Home from '../Home';
import Authentication from '../Authemtication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';

class Menu extends Component {
        state = {}
        render() {
                return (
                        <MenuStack />
                );
        }
}

export const MenuStack = StackNavigator({
        HomeScreen: {
                screen: Home
        },
        AuthenticationScreen: {
                screen: Authentication
        },
        ChangeInfoScreen: {
                screen: ChangeInfo
        },
        OrderHistoryScreen: {
                screen: OrderHistory
        }
},
        {
                headerMode: 'none',
                navigationOptions: {
                        gesturesEnabled: false,
                      }
        }
);

export default Menu;

