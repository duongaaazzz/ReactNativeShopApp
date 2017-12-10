import React, { Component } from 'react';
import {
        ScrollView,
        Dimensions,
        Image,
        Text,
        View,
} from 'react-native';


import icHome from '../../../media/appIcon/home0.png';
import icHomeS from '../../../media/appIcon/home.png';

import Conllection from './Collection';
import Category from './Category/Category';
import TopProduct from './TopProduct/TopProduct';

const { height } = Dimensions.get('window');


export default class Home extends Component {

        static navigationOptions = {
                tabBarIcon: ({ focused }) => {
                        const img = focused ? icHomeS : icHome;
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
                                        Home
                                        </Text>
                        );
                }

        };


        render() {
                return (
                        <ScrollView style={{ backgroundColor: '#e6e6e6', flex: 1 }}>
                                <Conllection />
                                <Category />
                                <TopProduct />
                        </ScrollView>
                );
        }
}

