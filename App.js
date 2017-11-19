import React, { Component } from 'react';
import {
        StatusBar
} from 'react-native';

import SideMenu from './src/navigation/SideMenu';

StatusBar.setHidden(true);


export default class App extends Component {
        render() {
                return (
                        <SideMenu />
                );
        }
}
