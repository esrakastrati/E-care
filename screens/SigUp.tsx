import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Auth } from 'aws-amplify';

import { SafeAreaView } from 'react-native-safe-area-context';


import AppTextInput from '../components/AppTextInput';

import AppButton from '../components/AppButton';


export default function SignUp({ navigation }) {

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const [email, setEmail] = useState('');
    async function signUp() {
        try {
            await Auth.signUp({ username, password, attributes: { email } });

            console.log(' Sign-up Confirmed');
            navigation.navigate('ConfirmSignUp');
        } catch (error) {
            console.log(' Error signing up...', error);

        }

    }


    return (
        <SafeAreaView >
            <View>

                <Text >Create a new account</Text>

                <AppTextInput

                    value={username}

                    onChangeText={text => setUsername(text)}

                    leftIcon="account"

                    placeholder="Enter username"

                    autoCapitalize="none"

                    keyboardType="email-address"

                    textContentType="emailAddress"

                />

                <AppTextInput

                    value={password}

                    onChangeText={text => setPassword(text)}

                    leftIcon="lock"

                    placeholder="Enter password"

                    autoCapitalize="none"

                    autoCorrect={false}

                    secureTextEntry

                    textContentType="password"

                />

                <AppTextInput

                    value={email}

                    onChangeText={text => setEmail(text)}

                    leftIcon="email"

                    placeholder="Enter email"

                    autoCapitalize="none"

                    keyboardType="email-address"

                    textContentType="emailAddress"

                />

                <AppButton title="Sign Up" onPress={signUp} />

                <View >

                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>

                        <Text >

                            Already have an account? Sign In

            </Text>

                    </TouchableOpacity>

                </View>

            </View>

        </SafeAreaView>

    );

}