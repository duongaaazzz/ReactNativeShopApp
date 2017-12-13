import React, { Component } from 'react';
import {
        StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView,
        Image
} from 'react-native';
import icback from '../../media/appIcon/backList.png';

import ItemProduct from './ItemProduct';

import productImage1 from '../../media/temp/sp1.jpeg';
import productImage2 from '../../media/temp/sp2.jpeg';
import productImage3 from '../../media/temp/sp3.jpeg';
import productImage4 from '../../media/temp/sp4.jpeg';
import productImage5 from '../../media/temp/sp5.jpeg';

const { height } = Dimensions.get('window');

export default class ListProduct extends Component {
        GotoProduct() {
                this.props.navigation.navigate('ProductDetailScreen');
        }
        render() {
                const { goBack } = this.props.navigation;

                const {
                        wrapper, headerStyle, iconSize, titleStyle, listProduct
                } = styles;

                return (
                        <ScrollView style={wrapper}>
                                <View style={headerStyle}>
                                        <TouchableOpacity
                                                onPress={() => goBack()}
                                        >
                                                <Image
                                                        source={icback}
                                                        style={iconSize}
                                                />
                                        </TouchableOpacity>

                                        <Text style={titleStyle}>Name list dress</Text>
                                        <View />
                                </View>

                                <View style={listProduct}>
                                        <ItemProduct
                                                srcImage={productImage1}
                                                goto={this.GotoProduct.bind(this)}
                                        />
                                        <ItemProduct
                                                srcImage={productImage2}
                                                goto={this.GotoProduct.bind(this)}
                                        />
                                        <ItemProduct
                                                srcImage={productImage3}
                                                goto={this.GotoProduct.bind(this)}
                                        />

                                        <ItemProduct
                                                srcImage={productImage4}
                                                goto={this.GotoProduct.bind(this)}
                                        />

                                        <ItemProduct
                                                srcImage={productImage5}
                                                goto={this.GotoProduct.bind(this)}
                                        />
                                        <ItemProduct
                                                srcImage={productImage1}
                                                goto={this.GotoProduct.bind(this)}
                                        />
                                        <ItemProduct
                                                srcImage={productImage2}
                                                goto={this.GotoProduct.bind(this)}
                                        />
                                        <ItemProduct
                                                srcImage={productImage3}
                                                goto={this.GotoProduct.bind(this)}
                                        />

                                        <ItemProduct
                                                srcImage={productImage4}
                                                goto={this.GotoProduct.bind(this)}
                                        />

                                        <ItemProduct
                                                srcImage={productImage5}
                                                goto={this.GotoProduct.bind(this)}
                                        />
                                </View>
                        </ScrollView>
                );
        }
}
const styles = StyleSheet.create({
        wrapper: {
                paddingTop: 0,
                margin: height / 100,
                shadowColor: 'black',
                shadowOffset: {
                        width: 0,
                        height: height * 0.01
                },
                shadowOpacity: 0.2
        },
        headerStyle: {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                height: height * 0.06
        },
        iconSize: {
                marginLeft: 2,
                height: height / 25,
                width: height / 25
        },
        titleStyle: {
                color: '#cc0066',
                fontFamily: 'Avenir',
                fontSize: 18
        },
        listProduct: {
                backgroundColor: 'white'
        }
});
