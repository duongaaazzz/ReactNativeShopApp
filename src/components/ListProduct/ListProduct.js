import React, { Component } from 'react';
import {
        StyleSheet, Text, View, StatusBar, TouchableOpacity
} from 'react-native';

StatusBar.setHidden(true);

export default class ListProduct extends Component {
        render() {
                const { goBack } = this.props.navigation;

                return (
                        <View>
                                <TouchableOpacity
                                        onPress={() => goBack()}
                                >

                                        <Text >Dress</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('ProductDetailScreen')}
                                >

                                        <Text >goto detail</Text>
                                </TouchableOpacity>
                        </View>
                );
        }
}

