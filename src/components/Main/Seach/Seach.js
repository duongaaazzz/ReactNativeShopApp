import React, { Component } from 'react';
import {
        Dimensions,
        Image,
        View,
        Text
} from 'react-native';


import icSearch from '../../../media/appIcon/search.png';
import icSearchS from '../../../media/appIcon/search0.png';

const { height } = Dimensions.get('window');


class Seach extends Component {


        static navigationOptions = {
                tabBarIcon: ({ focused }) => {
                        const img = focused ? icSearch : icSearchS;
                        return (
                                <Image
                                        source={img}
                                        style={{
                                                height: height / 25,
                                                width: height / 25
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
                                        Search
                                        </Text>
                        );
                }

        };
        

        render() {
                return (
                        <View>
                                <Text>
                                        Seach
                                </Text>
                        </View>
                );
        }
}

export default Seach;
