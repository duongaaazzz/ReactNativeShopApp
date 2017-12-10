import React, { Component } from 'react';
import {
        StyleSheet,
        TouchableOpacity,
        Dimensions,
        View,
        Text
} from 'react-native';

const { height } = Dimensions.get('window');


class Contact extends Component {
        render() {
                const {
                        txtStyle,
                        btnSignIn
                } = styles;

                return (
                        <View>
                                <TouchableOpacity
                                        style={btnSignIn}
                                >
                                        <Text style={txtStyle}>Sign In</Text>
                                </TouchableOpacity>

                        </View>
                );
        }
}

const styles = StyleSheet.create({
        btnSignIn: {
                borderRadius: height * 0.15,
                alignItems: 'center',
                width: height * 0.3,
                backgroundColor: 'white',

        },
        txtStyle: {
                color: '#34B089',
                fontFamily: 'Avenir',
                fontSize: 20,
        }
});


export default Contact;
