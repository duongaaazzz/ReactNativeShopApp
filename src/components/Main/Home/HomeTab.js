import React, { Component } from 'react';
import {
        Dimensions, Image, Text,
} from 'react-native';


import icHome from '../../../media/appIcon/home0.png';
import icHomeS from '../../../media/appIcon/home.png';

import NavigatorHome from './HomeNavigator';

const { height } = Dimensions.get('window');


export default class Home extends Component {

        static navigationOptions = {
                tabBarIcon: ({ focused }) => {
                        const img = focused ? icHomeS : icHome;
                        return (
                                <Image
                                        source={img}
                                        style={{ height: height / 20, width: height / 20 }}
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
                return (<NavigatorHome />);
        }
}

