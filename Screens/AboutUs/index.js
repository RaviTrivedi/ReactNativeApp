import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function AboutUs({ route, navigation }) {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>
                    About Us
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
