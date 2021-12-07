import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const auth = getAuth();

export default function Signup({ navigation }) {

    const [text, onChangeText] = React.useState("Useless Text");
    const [pass, setPass] = useState("");
    const [enroll, setEnroll] = useState("");

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('userUID')
            console.log("value -->> ", value);
            if (value !== null) {
                // value previously stored
                navigation.navigate('Root')
            } else {
                navigation.navigate('SignUp');
            }
        } catch (e) {
            // error reading value
        }
    }

    const handlePassChange = (pass) => {
        setPass(pass);
    }

    const handleEnrollChange = (enroll) => {
        setEnroll(enroll);
    }

    const handleSignup = async () => {
        // navigation.navigate('Loading')
        createUserWithEmailAndPassword(auth, enroll, pass)
            .then((userCredential) => {
                // Signed in 
                // console.log("userCredential -->> ", userCredential);
                const user = userCredential.user;
                const storeData = async (value) => {
                    try {
                        await AsyncStorage.setItem('userUID', value)
                    } catch (e) {
                        // saving error
                        Alert.alert("Please Try Again!");
                        navigation.navigate('SignUp');
                    }
                }
                storeData(userCredential.user.uid);
                navigation.navigate('Root')
                Alert.alert("Welcome To Online Shop")
                // ...
            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log("SIGNUP CATCH ERR CODE-->> ", error.code);
                console.log("SIGNUP CATCH ERR MSG-->> ", error.message);
                if (errorCode == "auth/weak-password") {
                    Alert.alert("", "Password should be at least 6 characters",
                        [
                            { text: "OK", onPress: () => navigation.navigate('SignUp') }
                        ])
                } else if (errorCode == "auth/invalid-email") {
                    Alert.alert("", "Invalid Email",
                        [
                            { text: "OK", onPress: () => navigation.navigate('SignUp') }
                        ])
                } 

                // ..
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={require('../../assets/DigitalLibrary.png')} style={styles.img} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    // mode="outlined"
                    label="Enter Your Email"
                    placeholder="Enter Your Email"
                    style={styles.input}
                    onChangeText={(enroll) => handleEnrollChange(enroll)}
                    autoComplete="email"
                />
            </View>
            <TextInput
                // mode="outlined"
                label="Password"
                secureTextEntry={true}
                // placeholder="Enter Your Password"
                right={<TextInput.Icon name="eye" />}
                autoCorrect={false}
                style={styles.passInput}
                onChangeText={(pass) => handlePassChange(pass)}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('LogIn')}
                style={styles.alreadyAccContainer}
            >
                <Text style={styles.alreadyAccText}>
                    Already have an Account ? Log In
                </Text>
            </TouchableOpacity>
            <View style={styles.signupBtnContainer}>
                <Button
                    mode="contained"
                    onPress={handleSignup}
                    style={styles.signupBtn}
                >
                    Sign Up
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
    passInput: {
        margin: 16,
    },
    alreadyAccContainer: {
        paddingLeft: 16,
        paddingRight: 16
    },
    alreadyAccText: {
        color: '#009FFF'
    },
    signupBtnContainer: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
    },
    signupBtn: {
        height: 44,
        paddingTop: 2
    }
});
