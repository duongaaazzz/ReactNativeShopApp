import React, { Component } from 'react';
import {
        Dimensions,
        StyleSheet,
        Image,
        View,
        Text
} from 'react-native';

import productImage1 from '../../../../media/temp/sp1.jpeg';
import productImage2 from '../../../../media/temp/sp2.jpeg';
import productImage3 from '../../../../media/temp/sp3.jpeg';
import productImage4 from '../../../../media/temp/sp4.jpeg';
import productImage5 from '../../../../media/temp/sp5.jpeg';

import ProductContain from './ProductContain';

const { width, height } = Dimensions.get('window');


class TopProduct extends Component {
        render() {
                const {
                        body,
                        wrapper,
                        titleView,
                        titleText,
                } = styles;

                return (
                        <View style={wrapper}>
                                <View style={titleView}>
                                        <Text style={titleText}>TOP PRODUCT</Text>
                                </View>

                                <View style={body}>
                                        <ProductContain
                                                nameProduct='ds fsdf'
                                                priceProduct='200' s
                                                sourceImage={productImage1}
                                        />

                                        <ProductContain
                                                nameProduct='sdfs ffg'
                                                priceProduct='200' s
                                                sourceImage={productImage2}
                                        />

                                        <ProductContain
                                                nameProduct='1hd gh'
                                                priceProduct='200' s
                                                sourceImage={productImage3}
                                        />

                                        <ProductContain
                                                nameProduct='1 sfg sf s fg'
                                                priceProduct='200' s
                                                sourceImage={productImage4}
                                        />

                                        <ProductContain
                                                nameProduct='hdf ghdf as'
                                                priceProduct='200' s
                                                sourceImage={productImage5}
                                        />

                                        <ProductContain
                                                nameProduct='ds fsdf'
                                                priceProduct='200' s
                                                sourceImage={productImage1}
                                        />
                                </View>
                        </View>
                );
        }
}


const styles = StyleSheet.create({
        wrapper: {
                margin: height * 0.01,
                backgroundColor: 'white',

        },
        titleView: {
                marginBottom: height * 0.01,
                justifyContent: 'center',
                backgroundColor: 'white',
                height: height * 0.06,
                shadowColor: 'black',
                shadowOffset: {
                        width: 0,
                        height: height * 0.01
                },
                shadowOpacity: 0.2
        },
        titleText: {
                paddingLeft: height * 0.01,
                fontSize: 20,
                color: '#a6a6a6',
                fontFamily: 'Avenir',
        },
        body: {
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-around'
        }
});

export default TopProduct;
