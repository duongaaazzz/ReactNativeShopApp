import React, { Component } from 'react';
import {
        TabNavigator,
        DrawerNavigator
} from 'react-navigation';
import {
        Dimensions
} from 'react-native';

import Menu from './Menu';


import Authentication from '../components/Authemtication/Authentication';
import ChangeInfo from '../components/ChangeInfo/ChangeInfo';
import OrderHistory from '../components/OrderHistory/OrderHistory';


import Cart from '../components/Main/Cart/Cart';
import Contact from '../components/Main/Contact/Contact';
import Home from '../components/Main/Home/Home';
import Seach from '../components/Main/Seach/Seach';
import Shop from '../components/Main/Shop/Shop';

const { width } = Dimensions.get('window');

class SideMenu extends Component {
        state = {}
        render() {
                return (
                        <Draw />
                );
        }
}

export const Tab = TabNavigator({
        HomeTab: {
                screen: Home
        },
        ShopTab: {
                screen: Shop
        },
        CartTab: {
                screen: Cart
        },
        SeachTab: {
                screen: Seach
        },
        ContactTab: {
                screen: Contact
        },
});

export const Draw = DrawerNavigator({
        Stack: {
                screen: Tab
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
                drawerWidth: width / 1.2,
                drawerPosition: 'left',
                contentComponent: props => <Menu {...props} />
        }
);

export default SideMenu;
