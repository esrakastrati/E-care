import React, { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { Auth } from 'aws-amplify';

import { SafeAreaView } from 'react-native-safe-area-context';


import AppTextInput from '../components/AppTextInput';

import AppButton from '../components/AppButton';


export default function ConfirmSignUp({ navigation }) {

    const [username, setUsername] = useState('');

    const [authCode, setAuthCode] = useState('');


    async function confirmSignUp() {

        try {

            await Auth.confirmSignUp(username, authCode);

            console.log(' Code confirmed');

            navigation.navigate('SignIn');
        } catch (error) {
            console.log(

                ' Verification code does not match. Please enter a valid verification code.',

                error.code

            );

        }

    }

    return (

        <SafeAreaView >

            <View >

                <Text >Confirm Sign Up</Text>
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
                    value={authCode}
                    onChangeText={text => setAuthCode(text)}
                    leftIcon="numeric"

                    placeholder="Enter verification code"

                    keyboardType="numeric"
                />

                <AppButton title="Confirm Sign Up" onPress={confirmSignUp} />

            </View>
        </SafeAreaView>
    );
}