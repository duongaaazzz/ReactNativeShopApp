import React, { Component } from 'react';
import {
        StatusBar
} from 'react-native';

import Root from './src/navigation/Root';

StatusBar.setHidden(true);


export default class App extends Component {
        render() {
                return (
                        <Root />
                );
        }
}
