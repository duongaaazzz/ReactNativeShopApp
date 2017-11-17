import React, { Component } from 'react';
import {
        TouchableOpacity,
        Text,
        View,
        StatusBar,
} from 'react-native';

StatusBar.setHidden(true);

export default class Main extends Component {

        render() {
                return (
                        <View>
                                <TouchableOpacity
                                        onPress={() => {
                                                this.props.navigation.navigate('DrawerOpen'); // open drawer
                                        }}
                                >
                                        <Text>
                                                Open
                                        </Text>
                                </TouchableOpacity>

                        </View >
                );
        }
}

