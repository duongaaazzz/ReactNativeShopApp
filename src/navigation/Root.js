import React, { Component } from 'react';
import {
        DrawerNavigator
} from 'react-navigation';
import {
        Dimensions
} from 'react-native';

import Menu from './Menu';


import Authentication from '../components/Authemtication/Authentication';
import ChangeInfo from '../components/ChangeInfo/ChangeInfo';
import OrderHistory from '../components/OrderHistory/OrderHistory';

import Tabbar from './Tabbar';

const { width } = Dimensions.get('window');

class Root extends Component {
        state = {}
        render() {
                return (
                        <SideMenu />
                );
        }
}

export const SideMenu = DrawerNavigator({
        Stack: {
                screen: Tabbar
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
                drawerWidth: width / 1.3,
                drawerPosition: 'left',
                contentComponent: props => <Menu {...props} />
        }
);

export default Root;
