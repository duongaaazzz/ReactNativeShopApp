import React, { Component } from 'react';
import {
        Image,
        Dimensions,
        View,
        Text
} from 'react-native';


import icContact from '../../../media/appIcon/contact.png';
import icContactS from '../../../media/appIcon/contact0.png';

const { height } = Dimensions.get('window');


class Contact extends Component {


        static navigationOptions = {
                tabBarIcon: ({ focused }) => {
                        const img = focused ? icContact : icContactS;
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
                                        Constact
                                        </Text>
                        );
                }

        };
        

        render() {
                return (
                        <View>
                                <Text>
                                        Contact
                                </Text>
                        </View>
                );
        }
}

export default Contact;
