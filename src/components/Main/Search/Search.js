import React, { Component } from 'react';
import {
        TouchableOpacity, View, Text
} from 'react-native';


class Seach extends Component {
        GotoProduct() {
                this.props.navigation.navigate('ProductDetailScreen');
        }

        render() {
                return (
                        <View>
                                <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('ProductDetailScreen')}
                                >

                                        <Text >goto detail</Text>
                                </TouchableOpacity>
                        </View>
                );
        }
}

export default Seach;
