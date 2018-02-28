import React, { Component } from 'react';
import {
        StatusBar
} from 'react-native';

import Root from './src/navigation/Tabbar';
import Authentication from './src/components/Authemtication/Authentication'

StatusBar.setHidden(true);


export default class App extends Component {
        render() {
                return (
                        <Root />
                );
        }
}
