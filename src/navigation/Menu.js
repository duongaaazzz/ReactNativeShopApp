import React, { Component } from 'react';
import {
        TouchableOpacity,
        View,
        Text
} from 'react-native';

class Home extends Component {

        render() {
                const { navigate } = this.props.navigation;

                return (
                        <View>

                                <TouchableOpacity
                                        onPress={() => {
                                                navigate('AuthenticationScreen');
                                        }}
                                >
                                        <Text>
                                                Go to AuthenticationScreen
                                        </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                        onPress={() => {
                                               navigate('ChangeInfoScreen');
                                        }}
                                >
                                        <Text>
                                                Go to ChangeInfoScreen
                                        </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                        onPress={() => {
                                                navigate('OrderHistoryScreen');
                                        }}
                                >
                                        <Text>
                                                Go to OrderHistoryScreen
                                        </Text>
                                </TouchableOpacity>


                        </View >
                );
        }
}

export default Home;
