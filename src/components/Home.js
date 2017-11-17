import React, { Component } from 'react';
import {
        TouchableOpacity,
        View,
        Text
} from 'react-native';

class Home extends Component {
        state = {}
        render() {
                return (
                        <View>
                              
                                <TouchableOpacity
                                        onPress={() => {
                                                this.props.navigation.navigate('AuthenticationScreen');
                                        }}
                                >
                                        <Text>
                                        Go to OrderHistory
                                        </Text>
                               </TouchableOpacity>

                               <TouchableOpacity
                                        onPress={() => {
                                                this.props.navigation.navigate('ChangeInfoScreen');
                                        }}
                                >
                                        <Text>
                                        Go to OrderHistory
                                        </Text>
                               </TouchableOpacity>

                               <TouchableOpacity
                                        onPress={() => {
                                                this.props.navigation.navigate('OrderHistoryScreen');
                                        }}
                                >
                                        <Text>
                                        Go to OrderHistory
                                        </Text>
                               </TouchableOpacity>

                               <TouchableOpacity
                                        onPress={() => {
                                                 this.props.navigation.navigate('DrawerOpen'); // open drawer
                                        }}
                                >
                                        <Text>
                                                Open
                                        </Text>
                               </TouchableOpacity>

                        </View >
                );
        }
}

export default Home;
