import React, { Component } from 'react';
import {
        TouchableOpacity, View, Text
} from 'react-native';


class Cart extends Component {
        GotoProduct() {
                this.props.navigation.navigate('ProductDetailScreen');
        }

        render() {
                return (
                        <View>
                                <TouchableOpacity
                                        onPress={() => this.GotoProduct()}
                                >

                                        <Text >goto detail</Text>
                                </TouchableOpacity>
                        </View>
                );
        }
}

export default Cart;
