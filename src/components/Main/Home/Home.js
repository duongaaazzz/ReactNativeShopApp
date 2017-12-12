import React, { Component } from 'react';
import {
        ScrollView,
} from 'react-native';

import Conllection from './Collection';
import Category from './Category/Category';
import TopProduct from './TopProduct/TopProduct';

export default class Home extends Component {

        GotoCategory() {
                this.props.navigation.navigate('ListProductScreen');
        }

        GotoConllection() {
                this.props.navigation.navigate('ProductDetailScreen');
        }
        
        GotoTopProduct() {
                this.props.navigation.navigate('ProductDetailScreen');
        }
        render() {
                return (
                        <ScrollView style={{ backgroundColor: '#e6e6e6', flex: 1 }}>
                                <Conllection goto={this.GotoConllection.bind(this)} />
                                <Category goto={this.GotoCategory.bind(this)} />
                                <TopProduct goto={this.GotoTopProduct.bind(this)} />
                        </ScrollView>
                );
        }
}

