import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import ProductDetail from '../../ProductDetail/ProductDetail';
import Search from './Search';

class SearchNavigator extends Component {
        state = {}
        render() {
                return (
                        <Navigator />
                );
        }
}

const Navigator = StackNavigator({
        SearchScreen: {
                screen: Search
        },
        ProductDetailScreen: {
                screen: ProductDetail
        },
},
        {
                headerMode: 'none'
        }
);

export default SearchNavigator;
