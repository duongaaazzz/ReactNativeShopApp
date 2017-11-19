import React, { Component } from 'react';
import {
        StyleSheet,
        Dimensions,
        TouchableOpacity,
        Text,
        View,
        StatusBar,
} from 'react-native';

StatusBar.setHidden(true);

const { height } = Dimensions.get('window');

export default class Home extends Component {

        render() {
                return (
                        <View>
                                <View style={{ height: height / 8, backgroundColor: '#93b5ed' }}>
                                        <TouchableOpacity
                                                onPress={() => {
                                                        this.props.navigation.navigate('DrawerOpen'); // open drawer
                                                }}
                                        >
                                                <Text>
                                                        Open click
                               </Text>
                                        </TouchableOpacity>
                                </View>

                                <View>
                                        <Text>fdsfdsf</Text>
                                </View>
                        </View>
                );
        }
}

