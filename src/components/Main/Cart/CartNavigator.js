import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import ProductDetail from '../../ProductDetail/ProductDetail';
import Cart from './Cart';

class CartNavigaro extends Component {
        state = {}
        render() {
                return (
                        <Navigator />
                );
        }
}

const Navigator = StackNavigator({
        CartScreen: {
                screen: Cart
        },
        ProductDetailScreen: {
                screen: ProductDetail
        },
},
        {
                headerMode: 'none'
        }
);

export default CartNavigaro;
