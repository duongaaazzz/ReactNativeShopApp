import React, { Component } from 'react';
import {
        StyleSheet,
        Text,
        View,
        StatusBar,
} from 'react-native';

StatusBar.setHidden(true);

export default class OrderHistory extends Component {
        render() {
                return (
                        <View>
                                <Text>
                                        OrderHistory
                               </Text>
                        </View>
                );
        }
}

