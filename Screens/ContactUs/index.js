import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default function ContactUs({ route, navigation }) {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>
                    Contact Us
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});