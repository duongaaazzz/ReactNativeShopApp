import React, { Component } from 'react';
import {
        Dimensions,
        TouchableOpacity,
        Text,
        View,
} from 'react-native';

const { height } = Dimensions.get('window');

class Header extends Component {
        state = {}
        render() {
                return (
                        <View style={{ height: height / 8, backgroundColor: '#93b5ed' }}>
                                <TouchableOpacity
                                        onPress={this.props.Open}
                                >
                                        <Text>
                                                Open click
               </Text>
                                </TouchableOpacity>
                        </View >
                );
        }
}

export default Header;