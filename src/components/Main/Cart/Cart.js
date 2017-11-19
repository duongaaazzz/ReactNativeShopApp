import React, { Component } from 'react';
import {
        Dimensions,
        Image,
        View,
        Text
} from 'react-native';


import icCart from '../../../media/appIcon/cart.png';
import icCartS from '../../../media/appIcon/cart0.png';

const { height } = Dimensions.get('window');


class Cart extends Component {

        static navigationOptions = {
                tabBarIcon: ({ focused }) => {
                        const img = focused ? icCart : icCartS;
                        return (
                                <Image
                                        source={img}
                                        style={{
                                                height: height / 20,
                                                width: height / 20
                                        }}
                                />
                        );
                },

                tabBarLabel: ({ focused }) => {
                        const colorText = focused ? '#34B089' : 'gray';
                        return (
                                <Text
                                        style={{
                                                color: colorText,
                                                fontFamily: 'Avenir',
                                                fontSize: 13
                                        }}
                                >
                                        Cart
                                        </Text>
                        );
                }

        };
        

        render() {
                return (
                        <View>
                                <Text>
                                        Cart
                                </Text>
                        </View>
                );
        }
}

export default Cart;
