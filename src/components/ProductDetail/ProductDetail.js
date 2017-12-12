import React, { Component } from 'react';
import {
        StyleSheet, Text, View, StatusBar, TouchableOpacity
} from 'react-native';

StatusBar.setHidden(true);

export default class ProductDetail extends Component {
        render() {
                const { goBack } = this.props.navigation;

                return (
                        <View>
                                <Text >ProductDetail</Text>

                                <TouchableOpacity
                                        onPress={() => goBack()}
                                >

                                        <Text >back</Text>
                                </TouchableOpacity>
                        </View>
                );
        }
}

