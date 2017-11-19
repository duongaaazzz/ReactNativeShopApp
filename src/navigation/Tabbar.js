import {
        TabNavigator,
} from 'react-navigation';
import React, { Component } from 'react';

import Home from '../components/Main/Home/Home';
import Shop from '../components/Main/Shop/Shop';
import Cart from '../components/Main/Cart/Cart';
import Seach from '../components/Main/Seach/Seach';
import Contact from '../components/Main/Contact/Contact';

class Tabbar extends Component {
        state = {}
        render() {
                return (
                        <Tab />
                );
        }
}

export default Tabbar;

export const Tab = TabNavigator({
        HomeTab: {
                screen: Home,
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
