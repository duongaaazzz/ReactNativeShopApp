import React, { Component } from 'react';

import {
        TabNavigator,
} from 'react-navigation';

import {
        Dimensions, View,
} from 'react-native';


import Cart from '../components/Main/Cart/CartTab';
import Contact from '../components/Main/Contact/Contact';
import Home from '../components/Main/Home/HomeTab';
import Search from '../components/Main/Search/SeearchTab';


import Header from '../components/Header';

const { height } = Dimensions.get('window');


class Tabbar extends Component {

        OpenMenu() {
                this.props.navigation.navigate('DrawerOpen');
        }

        render() {
                return (
                        <View style={{ flex: 1 }}>
                                <Header style={{ flex: 1 }} OpenMenu={this.OpenMenu.bind(this)} />
                                <Tab style={{ flex: 5 }} heightWindow={height} />
                        </View>
                );
        }
}

export default Tabbar;


export const Tab = TabNavigator({
        HomeTab: {
                screen: Home
        },
        CartTab: {
                screen: Cart
        },
        SeachTab: {
                screen: Search
        },
        ContactTab: {
                screen: Contact
        },
},
        {
                tabBarPosition: 'bottom'
        }
);
