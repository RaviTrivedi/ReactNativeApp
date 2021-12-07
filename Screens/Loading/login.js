import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function Loading({ navigation }) {

    const [text, onChangeText] = React.useState("");
    const [pass, setPass] = useState("");
    const [enroll, setEnroll] = useState("");

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color='#009FFF' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center'
    },
});
