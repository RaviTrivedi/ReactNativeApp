import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function Login({ navigation }) {

    const [text, onChangeText] = React.useState("Useless Text");
    const [pass, setPass] = useState("");
    const [enroll, setEnroll] = useState("");

    const handlePassChange = (pass) => {
        setPass(pass);
    }

    const handleEnrollChange = (enroll) => {
        setEnroll(enroll);
    }

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={require('../../assets/DigitalLibrary.png')} style={styles.img} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    // mode="outlined"
                    label="Enrollment Number"
                    placeholder="Enter Your Enrollmeent Number"
                    style={styles.input}
                    onChangeText={(enroll) => handleEnrollChange(enroll)}
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                style={styles.alreadyAccContainer}
            >
                <Text style={styles.alreadyAccText}>
                    Don't have an Account ? Sign Up
                </Text>
            </TouchableOpacity>
            {/* <TextInput
                // mode="outlined"
                label="Password"
                secureTextEntry={true}
                // placeholder="Enter Your Password"
                right={<TextInput.Icon name="eye" />}
                autoCorrect={false}
                style={styles.passInput}
                onChangeText={(pass) => handlePassChange(pass)}
            /> */}
            <View style={styles.loginBtnContainer}>
                <Button
                    mode="contained"
                    onPress={() => console.log('Pressed')}
                    style={styles.loginBtn}
                >
                    Log In
                </Button>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center'
    },
    imgContainer: {
        alignItems: 'center'
    },
    img: {
        width: 200,
        height: 200,

    },
    heading: {
        fontSize: 30
    },
    inputContainer: {
        // borderRadius: 10,
    },
    input: {
        margin: 16,
        // borderRadius: 10,
    },
    alreadyAccContainer: {
        paddingLeft: 16,
        paddingRight: 16
    },
    alreadyAccText: {
        color: '#009FFF'
    },
    passInput: {
        margin: 16,
    },
    loginBtnContainer: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
    },
    loginBtn: {
        height: 44,
        paddingTop: 2
    }
});
