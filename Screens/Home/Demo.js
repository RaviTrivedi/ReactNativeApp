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
} from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function Galleries({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    let arr = [
        {
            id: 1,
            name: "produt-1",
            price: '100',
            delivery: "Free Delivery"
        },
        {
            id: 2,
            name: "produt-2",
            price: '100',
            delivery: "Free Delivery"
        },
        {
            id: 3,
            name: "produt-3",
            price: '100',
            delivery: "Free Delivery"
        },
        {
            id: 4,
            name: "produt-4",
            price: '100',
            delivery: "Free Delivery"
        },
        {
            id: 5,
            name: "produt-5",
            price: '100',
            delivery: "Free Delivery"
        },
        {
            id: 6,
            name: "produt-6",
            price: '100',
            delivery: "Free Delivery"
        },
        {
            id: 7,
            name: "produt-7",
            price: '100',
            delivery: "Free Delivery"
        },
        {
            id: 8,
            name: "produt-8",
            price: '100',
            delivery: "Free Delivery"
        },
        {
            id: 9,
            name: "produt-9",
            price: '100',
            delivery: "Free Delivery"
        },
        {
            id: 10,
            name: "produt-10",
            price: '100',
            delivery: "Free Delivery"
        }
    ]

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
                        <View
                            style={styles.card}
                            onPress={() => {
                                navigation.navigate('SingleProduct', {
                                    item: item
                                })
                            }}
                        >
                            <Image style={styles.cardImage} />
                            <View style={styles.cardFooter}>
                                <View style={styles.socialBarContainer}>
                                    <View style={styles.socialBarSection}>
                                        <TouchableOpacity
                                            style={styles.socialBarButton}
                                        // onPress={() => this.addProductToCart()}
                                        >
                                            <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/flat_round/50/000000/share.png' }} />
                                            <Text style={[styles.socialBarLabel, styles.share]}>Share</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.socialBarSection}>
                                        <TouchableOpacity style={styles.socialBarButton}>
                                            <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/color/50/000000/hearts.png' }} />
                                            <Text style={styles.socialBarLabel}>{item.likes}</Text>
                                        </TouchableOpacity>
                                    </View>
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
        marginTop: 20,
        backgroundColor: "#eee"
    },
    searchBarContainer: {
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 8
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: "#E6E6E6",
    },
    listContainer: {
        alignItems: 'center'
    },
    separator: {
        // marginTop: 10,
    },
    /******** card **************/
    card: {
        marginVertical: 0,
        flexBasis: '48%',
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
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        flex: 1,
        height: 280,
        width: null,
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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    socialBarSection: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    socialBarlabel: {
        marginLeft: 8,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    socialBarButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});