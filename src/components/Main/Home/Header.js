import React, { Component } from 'react';
import {
        StyleSheet,
        TextInput,
        Image,
        Dimensions,
        TouchableOpacity,
        Text,
        View,
} from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');


class Header extends Component {
        state = {}
        render() {
                const {
                        titleStyle,
                        iconSize,
                        wrapper,
                        menu,
                        textInputs
                 } = styles;

                return (
                        <View style={wrapper}>
                                <View style={menu} >
                                        <TouchableOpacity onPress={this.props.OpenMenu}>
                                                <Image
                                                        source={icMenu}
                                                        style={iconSize}
                                                />
                                        </TouchableOpacity>

                                        <Text style={titleStyle}> Wearing a Dress</Text>

                                        <Image
                                                source={icLogo}
                                                style={iconSize}
                                        />

                                </View >

                                <TextInput
                                        style={textInputs}
                                        placeholder="what do you want to buy"
                                />
                        </View>
                );
        }
}

const styles = StyleSheet.create({
        wrapper: {
                justifyContent: 'space-around',
                padding: height / 100,
                height: height / 8,
                backgroundColor: '#34B089',
        },
        menu: {
                flexDirection: 'row',
                justifyContent: 'space-between'
        },
        textInputs: {
                paddingLeft: height / 100,
                height: height / 24,
                backgroundColor: '#fff'
        },
        iconSize: {
                height: height / 25,
                width: height / 25
        },
        titleStyle: {
                color: '#FFF',
                fontFamily: 'Avenir',
                fontSize: 20
        }
});

export default Header;
