import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, Dimensions, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function SingleProduct({ route, navigation }) {

    const { item } = route.params;

    let imgs = [
        require('../../assets/1.png'),
        require('../../assets/2.png'),
        require('../../assets/3.png'),
        require('../../assets/4.png'),
        require('../../assets/5.png'),
        require('../../assets/6.png')
    ]

    const onPressAddCart = () => {
        Alert.alert("Successfully Added in your Cart")
    }

    return (
        <SafeAreaView>
            <View style={styles.imgContainer}>
                <Image
                    source={imgs[item.id - 1]}
                    style={styles.cardImage}
                />
            </View>
            <View>
                <Text>
                    {item.name ? item.name : ""}
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <View style={styles.whishListbtnContainer}>
                    <Button
                        onPress={onPressAddCart}
                        mode="contained"
                        style={styles.whishListbtn}
                    >
                        Add to WhishList
                    </Button>
                </View>
                <View style={styles.cartbtnContainer}>
                    <Button
                        onPress={onPressAddCart}
                        mode="contained"
                        style={styles.cartbtn}
                    >
                        Add to Cart
                    </Button>
                    {/* <Button
                        title="Press me"
                        disabled
                        onPress={() => Alert.alert('Cannot press this one')}
                    /> */}
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgContainer: {
        // flex: 1,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height - Dimensions.get('window').width,
        width: Dimensions.get('window').width,
    },
    cardImage: {
        height: '100%',
        width: '80%',
    },
    btnContainer: {
        paddingLeft: '4%',
        paddingRight: '4%'
        // flex: 1,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    whishListbtn: {
        height: 44,
        marginTop: 10,
        backgroundColor: '#FF0099',
        color: '#fff'
    },
    cartbtn: {
        height: 44,
        marginTop: 10
    }
});
