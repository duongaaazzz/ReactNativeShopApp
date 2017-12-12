import React, { Component } from 'react';
import {
        Dimensions, TouchableOpacity, Image, View, Text
} from 'react-native';


class Cart extends Component {
        GotoProduct() {
                this.props.navigation.navigate('ProductDetailScreen');
        }

        render() {
                return (
                        <View>
                                <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('ProductDetailScreen')}
                                >

                                        <Text >goto detail</Text>
                                </TouchableOpacity>
                        </View>
                );
        }
}

export default Cart;
