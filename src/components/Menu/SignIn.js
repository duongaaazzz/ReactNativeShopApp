import React, { Component } from 'react';
import {
        StyleSheet, TouchableOpacity, Dimensions, View, Text
} from 'react-native';

const { height } = Dimensions.get('window');


class SignIn extends Component {

        render() {
                const {
                        txtUserName, txtStyle, btn
                } = styles;

                return (
                        <View
                                style={{
                                        justifyContent: 'space-between',
                                        flex: 1,
                                        alignItems: 'center'
                                }}
                        >
                                <Text style={txtUserName}>User name</Text>

                                <View>
                                        <TouchableOpacity
                                                style={btn}
                                                onPress={this.props.goto.GotoOrderHistoryScreen}
                                        >
                                                <Text style={txtStyle}>Order history</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                                style={btn}
                                                onPress={this.props.goto.GotoChangeInfoScreen}
                                        >
                                                <Text style={txtStyle}>Change info</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                                style={btn}
                                        >
                                                <Text style={txtStyle}>Sign out</Text>
                                        </TouchableOpacity>
                                </View>

                                <View />
                        </View>
                );
        }
}

const styles = StyleSheet.create({
        btn: {
                justifyContent: 'center',
                marginBottom: height * 0.01,
                borderRadius: height * 0.16,
                alignItems: 'center',
                width: height * 0.36,
                height: height * 0.06,
                backgroundColor: 'white',

        },
        txtStyle: {
                color: '#34B089',
                fontFamily: 'Avenir',
                fontSize: 16,
        },
        txtUserName: {
                color: 'white',
                fontFamily: 'Avenir',
                fontSize: 20,
        }
});


export default SignIn;
