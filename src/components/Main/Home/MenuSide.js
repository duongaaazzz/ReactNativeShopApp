import React, { Component } from 'react';
import {
        Text,
        View,
        StatusBar,
} from 'react-native';

StatusBar.setHidden(true);

export default class MenuSide extends Component {
        render() {
                return (
                       <View>
                               <Text>
                                        Menu
                               </Text>
                       </View>
                );
        }
}

