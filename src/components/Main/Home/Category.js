import React, { Component } from 'react';
import {
        Dimensions,
        StyleSheet,
        Image,
        View,
        Text
} from 'react-native';

import Swiper from 'react-native-swiper';

import fitImage from '../../../media/temp/fit.jpg';
import littleImage from '../../../media/temp/little.jpg';
import maxiImage from '../../../media/temp/maxi.jpg';
import midiImage from '../../../media/temp/midi.jpg';
import miniImage from '../../../media/temp/mini.jpg';
import partyImage from '../../../media/temp/party.jpg';

import SideSwiper from './SideSwiper';

const { height } = Dimensions.get('window');


class Category extends Component {

        render() {
                const {
                        textStyle,
                        wrapper,
                } = styles;
                return (
                        <View style={wrapper}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <Text style={textStyle}>LIST OF CATEGORY</Text>
                                </View>

                                <View style={{ flex: 4 }}>
                                        <Swiper
                                                autoplay
                                                activeDotColor='#34B089'
                                                paginationStyle={{ bottom: 3 }}
                                        >
                                                <SideSwiper
                                                        sourceImage={fitImage}
                                                        textImage='Fit'
                                                />

                                                <SideSwiper
                                                        sourceImage={littleImage}
                                                        textImage='Little'
                                                />

                                                <SideSwiper
                                                        sourceImage={maxiImage}
                                                        textImage='Maxi'
                                                />

                                                <SideSwiper
                                                        sourceImage={midiImage}
                                                        textImage='Midi'
                                                />

                                                <SideSwiper
                                                        sourceImage={miniImage}
                                                        textImage='Mini'
                                                />

                                                <SideSwiper
                                                        sourceImage={partyImage}
                                                        textImage='Party'
                                                />
                                        </Swiper>
                                </View>
                        </View>
                );
        }
}

const styles = StyleSheet.create({
        wrapper: {
                padding: height * 0.01,
                paddingTop: 0,
                height: height * 0.34,
                backgroundColor: 'white',
                margin: height / 100,
                shadowColor: 'black',
                shadowOffset: {
                        width: 0,
                        height: height * 0.01
                },
                shadowOpacity: 0.2
        },
        textStyle: {
                fontSize: 20,
                color: '#a6a6a6'
        },
});

export default Category;

