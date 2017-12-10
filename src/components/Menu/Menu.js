import React, { Component } from 'react';
import {
        Image, Dimensions, StyleSheet, View,
} from 'react-native';

import proFileIcon from '../../media/temp/profile.png';

import NotSignIn from './NotSignIn';
import SignIn from './SignIn';

const { height } = Dimensions.get('window');


class Home extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        isLogedIn: true
                };
        }

        render() {
                const { navigate } = this.props.navigation;

                const goto = {
                        GotoOrderHistoryScreen() {
                                navigate('OrderHistoryScreen');
                        },
                        GotoChangeInfoScreen() {
                                navigate('ChangeInfoScreen');
                        },
                        GotoAuthenticationScreen() {
                                navigate('AuthenticationScreen');
                        }
                };
                const sinInJSX = this.state.isLogedIn ?
                        <SignIn goto={goto} />
                        : <NotSignIn />;

                const {
                        viewSign, viewImg, proImageIcon, wrapper
                } = styles;

                return (
                        <View style={wrapper}>
                                <View style={viewImg}>
                                        <Image source={proFileIcon} style={proImageIcon} />
                                </View>

                                <View style={viewSign}>
                                        {sinInJSX}
                                </View>
                        </View >
                );
        }
}


const styles = StyleSheet.create({
        wrapper: {
                alignItems: 'center',
                flex: 1,
                justifyContent: 'space-around',
                padding: height / 100,
                backgroundColor: '#34B089',
        },
        proImageIcon: {
                borderRadius: height * 0.1,
                width: height * 0.2,
                height: height * 0.2,
        },
        viewSign: {
                flex: 3,
        },
        viewImg: {
                marginTop: height * 0.02,
                flex: 1
        }
});

export default Home;
