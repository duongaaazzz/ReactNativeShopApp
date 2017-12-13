import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import ProductDetail from '../../ProductDetail/ProductDetail';
import Home from './Home';
import ListProduct from '../../ListProduct/ListProduct';

class NavigatorHome extends Component {
        state = {}
        render() {
                return (
                        <Navigator />
                );
        }
}

const Navigator = StackNavigator({

        HomeScreen: {
                screen: Home
        },
        ProductDetailScreen: {
                screen: ProductDetail
        },
        ListProductScreen: {
                screen: ListProduct
        },
},
        {
                headerMode: 'none'
        }
);

export default NavigatorHome;
