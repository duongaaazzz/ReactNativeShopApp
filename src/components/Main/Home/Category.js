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


const { width, height } = Dimensions.get('window');


class Category extends Component {

        render() {
                const {
                        imageStyle,
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
                                        >
                                                <Image source={fitImage} style={imageStyle} />
                                                <Image source={littleImage} style={imageStyle} />
                                                <Image source={maxiImage} style={imageStyle} />
                                                <Image source={midiImage} style={imageStyle} />
                                                <Image source={miniImage} style={imageStyle} />
                                                <Image source={partyImage} style={imageStyle} />
                                        </Swiper>
                                </View>
                        </View>
                );
        }
}

const imageWidth = width - (height * 0.03);
const imageHeight = imageWidth / 2;

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
        imageStyle: {
                height: imageHeight,
                width: imageWidth
        }
});

export default Category;

