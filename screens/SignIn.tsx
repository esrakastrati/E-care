import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Auth } from 'aws-amplify';

import { SafeAreaView } from 'react-native-safe-area-context';

import AppTextInput from '../components/AppTextInput';

import AppButton from '../components/AppButton';
import DropDownPicker from 'react-native-dropdown-picker'


export default function SignIn({ navigation, updateAuthState }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [value, setValue] = useState('member');
    const [isRole, setRole] = useState();


    async function signIn() {

        try {
            if (value == "member") {
                await Auth.signIn(username, password);
                console.log(' Success');
                updateAuthState('loggedIn');
                setRole(0);
            }
            else {
                setRole(1);


            }
        } catch (error) {
            console.log(' Error signing in...', error);
        }
    }

    const example = () => {

        console.log(value);

    }
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>

                <Text style={styles.appName}>E-Care</Text>


                <DropDownPicker
                    items={[
                        { label: 'Family Member', value: 'member', selected: true },
                        { label: 'Caregiver', value: 'caregiver' },
                        { label: 'Patient', value: 'patient' },
                    ]}
                    containerStyle={{
                        height: 80, width: "90%", marginTop: 50, marginVertical: 10,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 15,
                        backgroundColor: 'rgb(17, 100, 186)'
                    }}
                    style={{ backgroundColor: "rgb(17, 100, 186)", borderWidth: 0 }}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    labelStyle={{
                        fontSize: 18,
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        color: "white",
                        textAlign: "center",
                        alignItems: "center",
                        alignContent: "center",
                        alignSelf: "center"

                    }}

                    dropDownStyle={{
                        backgroundColor: 'rgb(17, 100, 186)', alignItems: "center",
                        alignContent: "center",
                        alignSelf: "center",
                        marginRight: 50
                    }}

                    defaultValue={value}
                    onChangeItem={item => setValue(item.value)}





                />


                <Text style={styles.title}>Sign in to your account</Text>

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

                <AppButton title="Login" onPress={signIn} />

                <AppButton title="Example" onPress={example} />


                <View style={styles.footerButtonContainer}>

                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>

                        <Text style={styles.forgotPasswordButtonText}>

                            Don't have an account? Sign Up

            </Text>

                        {isRole && <Text style={styles.error}>

                            Check your role again!

            </Text>}


                    </TouchableOpacity>

                </View>
            </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({

    safeAreaContainer: {

        flex: 1,

        backgroundColor: 'white'

    },

    container: {

        flex: 1,

        alignItems: 'center'

    },
    appName: {
        fontSize: 30,
        fontWeight: '600',
        textTransform: 'uppercase',
        marginTop: 50
    },
    title: {
        fontSize: 20,
        color: '#202020',

        fontWeight: '500',

        marginVertical: 15,
        marginTop: 50

    },

    footerButtonContainer: {

        marginVertical: 15,

        justifyContent: 'center',

        alignItems: 'center'

    },

    forgotPasswordButtonText: {

        color: 'rgb(17, 100, 186)',

        fontSize: 18,

        fontWeight: '600'

    },

    error: {
        color: 'red',

        fontSize: 16,

        fontWeight: '600',

        textAlign: "center",

        marginTop: 10


    }

});


