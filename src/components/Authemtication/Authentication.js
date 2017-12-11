import React, { Component } from 'react';
import {
        StyleSheet, Text, View, Dimensions, TouchableOpacity, Image
} from 'react-native';

import icLogo from '../../media/appIcon/ic_logo.png';
import icback from '../../media/appIcon/back_white.png';

import SignIn from './SignIn';
import NonSignIn from './NonSignIn';

const { width, height } = Dimensions.get('window');


export default class Anthentication extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        isActiveSignIn: true
                };
        }

        render() {
                const {
                        titleStyle, iconSize, wrapper, menu, containerBtn, btnSignIn,
                        btnSignUp, activeStyle, nonActiveStyle, contianSignInStyle
                } = styles;

                const selectActiveJSX = this.state.isActiveSignIn ? <SignIn /> : <NonSignIn />;


                return (
                        <View style={wrapper}>
                                <View style={menu} >
                                        <TouchableOpacity onPress={this.props.OpenMenu}>
                                                <Image
                                                        source={icback}
                                                        style={iconSize}
                                                />
                                        </TouchableOpacity>

                                        <Text style={titleStyle}> Wearing a Dress</Text>

                                        <Image
                                                source={icLogo}
                                                style={iconSize}
                                        />

                                </View >

                                <View style={contianSignInStyle}>
                                        {selectActiveJSX}
                                </View>

                                <View style={containerBtn}>
                                        <TouchableOpacity
                                                style={btnSignIn}
                                        >
                                                <Text style={activeStyle}>Sign In</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                                style={btnSignUp}
                                        >
                                                <Text style={nonActiveStyle}>Sign Up</Text>
                                        </TouchableOpacity>

                                </View>

                        </View>
                );
        }
}

const styles = StyleSheet.create({
        wrapper: {
                justifyContent: 'space-between',
                flex: 1,
                padding: height / 100,
                backgroundColor: '#34B089',
        },
        menu: {
                flexDirection: 'row',
                justifyContent: 'space-between'
        },
        iconSize: {
                height: height / 25,
                width: height / 25
        },
        containerBtn: {
                justifyContent: 'center',
                flexDirection: 'row',
                marginBottom: height * 0.02
        },
        btnSignIn: {
                borderTopLeftRadius: height * 0.03,
                borderBottomLeftRadius: height * 0.03,
                marginRight: 1,
                alignItems: 'center',
                justifyContent: 'center',
                height: height * 0.06,
                width: width * 0.4,
                backgroundColor: '#fff',
        },
        btnSignUp: {
                borderTopRightRadius: height * 0.03,
                borderBottomRightRadius: height * 0.03,
                marginLeft: 1,
                alignItems: 'center',
                justifyContent: 'center',
                height: height * 0.06,
                width: width * 0.4,
                backgroundColor: '#fff',
        },
        activeStyle: {
                fontFamily: 'Avenir',
                height: height / 24,
                fontSize: 16,
                color: '#34B089'
        },
        nonActiveStyle: {
                fontFamily: 'Avenir',
                height: height / 24,
                fontSize: 16,
                color: '#b3b3b3'
        },
        contianSignInStyle: {
                justifyContent: 'center',
                flex: 1,
        }
});
