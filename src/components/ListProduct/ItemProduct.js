import React, { Component } from 'react';
import {
        View, Image, Text, StyleSheet, Dimensions, TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get('window');

class ItemProduct extends Component {
        state = {}
        render() {
                const {
                        wrapper, img, productInfo, txtnameProductstyle, txtPriceProductstyle,
                        txtMeterialProductstyle, circle, txtShowDetial, txtMainColorProductstyle,
                        viewProduct
                } = styles;

                return (
                        <View style={wrapper}>
                                <Image
                                        source={this.props.srcImage}
                                        style={img}
                                />
                                <View style={viewProduct}>
                                        <Text style={txtnameProductstyle}>Name Product </Text>
                                        <Text style={txtPriceProductstyle}>300$ </Text>
                                        <Text style={txtMeterialProductstyle}>Meterial silk </Text>

                                        <View style={productInfo}>
                                                <Text style={txtMainColorProductstyle}>
                                                        Main color:
                                                </Text>
                                                <View style={circle} />
                                                <TouchableOpacity onPress={() => this.props.goto()}>
                                                        <Text style={txtShowDetial}>
                                                                Show detial
                                                        </Text>
                                                </TouchableOpacity>

                                        </View>
                                </View>
                        </View>
                );
        }
}

const styles = StyleSheet.create({
        wrapper: {
                paddingLeft: 2,
                paddingTop: 3,
                marginBottom: 3,
                borderLeftColor: 'white',
                borderRightColor: 'white',
                borderTopColor: '#a6a6a6',
                borderBottomColor: 'white',
                borderWidth: 0.5,
                flexDirection: 'row',
        },
        viewProduct: {
                paddingTop: 2,
                paddingBottom: 2,
                justifyContent: 'space-between',
                marginLeft: 3
        },
        img: {
                margin: 2,
                width: height * 0.13,
                height: ((height * 0.13) * 452) / 361,
        },
        productInfo: {
                width: width * 0.55,
                flexDirection: 'row',
                justifyContent: 'space-between',
        },
        txtnameProductstyle: {
                fontSize: 16,
                color: '#a6a6a6',
                fontFamily: 'Avenir',
        },
        txtPriceProductstyle: {
                fontSize: 13,
                color: '#cc0066',
                fontFamily: 'Avenir',
        },
        txtMeterialProductstyle: {
                fontWeight: '400',
                fontSize: 13,
                fontFamily: 'Avenir',
        },
        circle: {
                alignItems: 'center',
                height: height / 30,
                width: height / 30,
                borderRadius: 50,
                backgroundColor: '#ffcce6'
        },
        txtShowDetial: {
                fontStyle: 'italic',
                fontSize: 13,
                color: '#34B089',
                fontFamily: 'Avenir',
        },
        txtMainColorProductstyle: {
                fontWeight: '400',
                fontSize: 13,
                fontFamily: 'Avenir',
        },
});

export default ItemProduct;
