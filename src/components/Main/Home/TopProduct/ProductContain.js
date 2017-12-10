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

const { width, height } = Dimensions.get('window');
const withProdut = (width - (height * 0.05)) / 2;
const heightImageProduct = (withProdut / 361) * 452;

class ProductContain extends Component {
        render() {
                const {
                        textTitlePrice,
                        textTitleName,
                        productContainer,
                        imageStyle
                } = styles;


                return (
                        <View style={productContainer}>
                                <Image style={imageStyle} source={this.props.sourceImage} />
                                <Text style={textTitleName}>{this.props.nameProduct}</Text>
                                <Text style={textTitlePrice}>{this.props.priceProduct}$</Text>
                        </View>
                );
        }
}

const styles = StyleSheet.create({
        productContainer: {
                marginBottom: height * 0.015,
                shadowColor: 'black',
                shadowOffset: {
                        width: 0,
                        height: height * 0.01
                },
                shadowOpacity: 0.2,
                backgroundColor: 'white',
                width: withProdut,
        },
        imageStyle: {
                width: withProdut,
                height: heightImageProduct
        },
        textTitleName: {
                marginVertical: height * 0.005,
                paddingLeft: height * 0.01,
                color: '#999999',
                fontFamily: 'Avenir',
                fontSize: 11,
        },
        textTitlePrice: {
                marginBottom: height * 0.005,
                paddingLeft: height * 0.01,
                color: '#34B089',
                fontFamily: 'Avenir',
                fontSize: 11,
                fontWeight: 'bold',
        }
});

export default ProductContain;
