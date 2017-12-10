import React, { Component } from 'react';
import {
        Dimensions, StyleSheet, View, Text, Image
} from 'react-native';


const { width, height } = Dimensions.get('window');


class SideSwiper extends Component {
        render() {
                const {
                        wrapper, textStyle, imageStyle
                } = styles;

                return (
                        <View style={wrapper} >
                                <Image source={this.props.sourceImage} style={imageStyle} />
                                <Text style={textStyle}>{this.props.textImage} Dress</Text>
                        </View>
                );
        }
}

const imageWidth = width - (height * 0.03);
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
        wrapper: {
                alignItems: 'center',
                justifyContent: 'center'
        },
        imageStyle: {
                height: imageHeight,
                width: imageWidth
        },
        textStyle: {
                color: '#a6a6a6',
                fontFamily: 'Avenir',
                fontSize: 20,
                position: 'absolute'
        }
});

export default SideSwiper;
