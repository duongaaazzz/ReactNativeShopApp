import React, { Component } from 'react';
import {
        StyleSheet,
        Text,
        View,
        StatusBar,
} from 'react-native';

StatusBar.setHidden(true);

export default class Anthentication extends Component {

        static navigationOptions = {
                title: 'Anthentication'
        };

        render() {
                return (
                        <View>
                                <Text>
                                        Anthentication
                               </Text>
                        </View>
                );
        }
}

