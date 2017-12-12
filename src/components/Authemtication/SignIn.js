import React, { Component } from 'react';
import {
        View, TextInput, StyleSheet, TouchableOpacity, Dimensions, Text
} from 'react-native';

const { width, height } = Dimensions.get('window');

class SignIn extends Component {
        static navigationOptions = {

        }

        render() {
                const {
                        txtInput, txtStyle, btnStyle, wrapper
                } = styles;

                return (
                        <View style={wrapper}>
                                <TextInput
                                        style={txtInput}
                                        placeholder="Enter your name"
                                />
                                <TextInput
                                        style={txtInput}
                                        placeholder="Enter your password"
                                />
                                <TouchableOpacity
                                        style={btnStyle}
                                >
                                        <Text style={txtStyle}>SIGN IN NOW</Text>
                                </TouchableOpacity>
                        </View>
                );
        }
}

const styles = StyleSheet.create({
        wrapper: {
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
        },
        txtInput: {
                borderRadius: height * 0.03,
                paddingLeft: 6,
                width: width * 0.8,
                marginBottom: height * 0.01,
                height: height * 0.06,
                backgroundColor: 'white'
        },
        txtStyle: {
                color: 'white',
                fontFamily: 'Avenir',
                fontSize: 14,
        },
        btnStyle: {
                borderRadius: height * 0.03,
                borderWidth: 1,
                borderColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                height: height * 0.06,
                width: width * 0.8,
        },

});

export default SignIn;          
