import React, { Component } from 'react';
import {
        StyleSheet,
        TouchableOpacity,
        Text,
        View,
        StatusBar,
} from 'react-native';

import Header from './Header';

StatusBar.setHidden(true);

export default class Home extends Component {

        OpenMenu() {
                this.props.navigation.navigate('DrawerOpen');
        }

        render() {
                return (
                        <View>
                                <Header OpenMenu={this.OpenMenu.bind(this)} />

                                <View>
                                        <Text>fdsfdsf</Text>
                                </View>
                        </View>
                );
        }
}

