import React, { Component } from 'react';
import {
        StackNavigator,
        TabNavigator,
        DrawerNavigator
} from 'react-navigation';

import MenuSide from '../components/MenuSide';
import Authentication from '../components/Authemtication/Authentication';
import ChangeInfo from '../components/ChangeInfo/ChangeInfo';
import OrderHistory from '../components/OrderHistory/OrderHistory';

import Tabbar from './Tabbar';

class RootNavigation extends Component {
        state = {}
        render() {
                return (
                        <SideMenu />
                );
        }
}

export const SideMenu = DrawerNavigator({
        HomeScreen: {
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
                drawerWidth: 270,
                drawerPosition: 'left',
                contentComponent: props => <MenuSide {...props} />
        }
);


export default RootNavigation;
