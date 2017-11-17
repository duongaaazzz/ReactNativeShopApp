import React, { Component } from 'react';
import {
        StackNavigator,
        TabNavigator,
        DrawerNavigator
} from 'react-navigation';
import {
        StatusBar,
} from 'react-native';

import Main from './Main/Main';
import Cart from './Main/Cart/Cart';
import Constact from './Main/Contact/Contact';
import Shop from './Main/Shop/Shop';
import Seach from './Main/Seach/Seach';
import Menu from './Main/Menu';

StatusBar.setHidden(true);


export default class App extends Component {
        render() {
                return (
                        <SideMenu />
                );
        }
}

export const Tabbar = TabNavigator({
        HomeTab: {
                screen: Main
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
        ConstactTab: {
                screen: Constact
        }
});

export const SideMenu = DrawerNavigator({
        Tabbar: {
                screen: Tabbar
        },

},
        {
                drawerWidth: 270,
                drawerPosition: 'left',
                contentComponent: props => <Menu {...props} />
        }
);

