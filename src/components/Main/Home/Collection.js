import React, { Component } from 'react';
import {
        Dimensions,
        StyleSheet,
        Image,
        View,
        Text
} from 'react-native';

import bannerImage from '../../../media/temp/banner.jpg';


const { width, height } = Dimensions.get('window');


class Collection extends Component {

        render() {
                const {
                        imageStyle,
                        textStyle,
                        wrapper,
                } = styles;

                return (
                        <View style={wrapper}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <Text style={textStyle}>SPRING COLLECTION</Text>
                                </View>
                                <View style={{ flex: 4, alignItems: 'center' }}>
                                        <Image
                                                source={bannerImage}
                                                style={imageStyle}
                                        />
                                </View>
                        </View>
                );
        }
}

const imageWidth = width - (height * 0.03);
const imageHeight = (imageWidth / 933) * 465;

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

export default Collection;

