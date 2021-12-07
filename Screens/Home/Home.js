import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button,
    Share,
} from 'react-native';
import { Searchbar } from 'react-native-paper';

import { Icon } from 'react-native-elements'
import { arr } from '../../data';

export default function Galleries({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('');
    const [wishlist, setWishlist] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
    
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
            <View style={styles.container}>
                <View style={styles.searchBarContainer}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />

                </View>
                <FlatList style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={arr}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={styles.separator} />
                        )
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.card}>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('SingleProduct', {
                                            item: item,
                                        })
                                    }}
                                >
                                    <Image
                                        source={item.source ? item.source : require('../../assets/1.png')}
                                        style={styles.cardImage}
                                    />
                                </TouchableOpacity>
                                <View style={styles.cardFooter}>
                                    <View style={styles.socialBarContainer}>
                                        <View style={styles.socialBarSectionProductName}>
                                            <TouchableOpacity
                                                style={styles.socialBarButton}
                                            >
                                                <View style={styles.productNameContainer}>
                                                    <Text style={[styles.socialBarLabel, styles.share]}>Men's Slim fit T-Shirt</Text>
                                                </View>
                                                <View style={styles.priceContainer}>
                                                    <Text style={styles.price}>₹189</Text>
                                                </View>
                                                <View style={styles.freeDeliveryTagContainer}>
                                                    <Text style={styles.freeDeliveryTag}>Free Delivery</Text>

                                                </View>
                                                {/* <Text style={styles.socialBarLabel}>
                                                <Icon
                                                    name="share"
                                                    type='material'
                                                    onPress={onShare}
                                                />
                                            </Text> */}
                                                <View></View>
                                            </TouchableOpacity>
                                        </View>
                                        {/* <View style={styles.socialBarSection}>
                                        <TouchableOpacity style={styles.socialBarButton}>
                                            <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/color/50/000000/hearts.png' }} />
                                            <Text style={styles.socialBarLabel}>
                                                <Icon
                                                    name="share-google"
                                                    type='EvilIcons'
                                                    color={wishlist.name == item.name ? 'red' : 'black'}
                                                    onPress={() => {
                                                        Alert.alert("Product Saved in Your Wishlist ")
                                                        setWishlist(item);
                                                    }} />

                                            </Text>
                                        </TouchableOpacity>
                                    </View> */}
                                    </View>
                                </View>
                            </View>
                        )
                    }} />
            </View>
        
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 12,
        backgroundColor: "#eee"
    },
    searchBarContainer: {
        // paddingTop: 8,
        paddingLeft: 4,
        paddingRight: 4,
        paddingBottom: 4
    },
    list: {
        // paddingHorizontal: 4,
        // backgroundColor: "#E6E6E6",
    },
    listContainer: {
        alignItems: 'center'
    },
    separator: {
        // marginTop: 10,
    },
    /******** card **************/
    card: {
        marginVertical: 2,
        flexBasis: '49%',
        // marginHorizontal: 5,
        borderStyle: 'solid',
        borderWidth: 0.5
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingTop: 12.5,
        // paddingBottom: 25,
        // paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        flex: 1,
        height: 280,
        width: null,
        backgroundColor: 'red'
    },
    /******** card components **************/
    share: {
        color: "#25b7d3",
    },
    icon: {
        width: 25,
        height: 25,

    },
    /******** social bar ******************/
    socialBarContainer: {
        justifyContent: 'flex-start',
        // alignItems: 'center',
        marginLeft: 4,
        // flexDirection: 'row',
        flex: 1
    },
    socialBarSectionProductName: {
        // justifyContent: 'flex-start',
        // flexDirection: 'row',
        // flex: 1,
    },
    socialBarSection: {
        // justifyContent: 'center',
        // flexDirection: 'row',
        // flex: 1,
    },
    priceContainer: {

    },
    price: {
        fontWeight: 'bold'
    },
    freeDeliveryTagContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 4,
        alignSelf: 'flex-start',
        marginBottom: 4
    },
    socialBarlabel: {
        marginLeft: 2,
        // alignSelf: 'flex-end',
        // justifyContent: 'center',
    },
    socialBarButton: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
    }
});
// import React, { useState } from 'react';
// import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
// import { Searchbar } from 'react-native-paper';

// export default function Home({ navigation }) {

//     const [searchQuery, setSearchQuery] = useState('');

//     const onChangeSearch = query => setSearchQuery(query);

//     let arr = [
//         {
//             id: 1,
//             name: "produt-1",
//             price: '100',
//             delivery: "Free Delivery"
//         },
//         {
//             id: 2,
//             name: "produt-2",
//             price: '100',
//             delivery: "Free Delivery"
//         },
//         {
//             id: 3,
//             name: "produt-3",
//             price: '100',
//             delivery: "Free Delivery"
//         },
//         {
//             id: 4,
//             name: "produt-4",
//             price: '100',
//             delivery: "Free Delivery"
//         },
//         {
//             id: 5,
//             name: "produt-5",
//             price: '100',
//             delivery: "Free Delivery"
//         },
//         {
//             id: 6,
//             name: "produt-6",
//             price: '100',
//             delivery: "Free Delivery"
//         },
//         {
//             id: 7,
//             name: "produt-7",
//             price: '100',
//             delivery: "Free Delivery"
//         },
//         {
//             id: 8,
//             name: "produt-8",
//             price: '100',
//             delivery: "Free Delivery"
//         },
//         {
//             id: 9,
//             name: "produt-9",
//             price: '100',
//             delivery: "Free Delivery"
//         },
//         {
//             id: 10,
//             name: "produt-10",
//             price: '100',
//             delivery: "Free Delivery"
//         }
//     ]

//     const Product = ({ item, index, onPress }) => {
//         // console.log("index -->> ", index);
//         return <View style={styles.productsContainer}>
//             <TouchableOpacity
//                 style={styles.product1}
//                 onPress={() => {
//                     navigation.navigate('SingleProduct', {
//                         item: item
//                     })
//                 }}
//             >
//                 <Text>
//                     {item.name}
//                     {item.price}
//                     {item.delivery}
//                 </Text>
//             </TouchableOpacity>
//             {/* <TouchableOpacity
//                 style={styles.product2}
//                 onPress={() => {
//                     navigation.navigate('SingleProduct', {
//                         itemId: item2.id,
//                         item: item2
//                     })
//                 }}
//             >
//                 <Text>
//                     {item2.name}
//                     {item2.price}
//                     {item2.delivery}
//                 </Text>
//             </TouchableOpacity> */}
//         </View>
//     }

//     return (
//         <SafeAreaView>
//             <View style={styles.searchBarContainer}>
//                 <Searchbar
//                     placeholder="Search"
//                     onChangeText={onChangeSearch}
//                     value={searchQuery}
//                 />

//             </View>
//             <FlatList
//                 data={arr}
//                 renderItem={({ item, index }) => {
//                     // console.log("ITEM --->>> ", item)
//                     return <Product
//                         item={item}
//                         index={index}
//                     />
//                 }}
//                 numColumns={2}
//                 keyExtractor={(item) => item.name}
//                 style={styles.productsFlatList}
//             />
//             <View></View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FFF',
//         // justifyContent: 'center'
//     },
//     searchBarContainer: {
//         paddingTop: 8,
//         paddingLeft: 8,
//         paddingRight: 8,
//         paddingBottom: 8
//     },
//     productsFlatList: {
//         flexGrow: 1,
//         marginLeft: 7.5,
//         marginRight: 4,
//         paddingBottom: 100
//         // height: Dimensions.get('window').height
//         // marginVertical: 8
//     },
//     productsContainer: {
//         marginVertical: 8,
//         flexBasis: '48%',
//         // backgroundColor: 'yellow',
//         // paddingTop: 8,
//         // marginHorizontal: 2,
//         // marginVertical: 2,
//         // flexBasis: '48%',
//         // paddingLeft: 6,
//         // marginTop: 8,
//         // marginLeft: 8,
//         // marginRight: 8
//     },
//     product1: {
//         flex: 1,
//         height: 280,
//         width: null,
//         // width: '50%',
//         // height: '10%',
//         // backgroundColor: '#6dd5ed',
//         borderStyle: 'solid',
//         borderWidth: 0.5,
//         borderColor: 'gray',
//         // justifyContent: 'center',
//         // alignItems: 'center',
//     },
//     product2: {
//         width: 198,
//         height: 280,
//         // backgroundColor: '#6dd5ed',
//         borderStyle: 'solid',
//         borderWidth: 0.5,
//         borderColor: 'gray',
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// });
