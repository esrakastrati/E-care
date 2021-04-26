import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function AddTask() {

    const onPress = () => {

    }

    return (
        <View style={styles.button}>
            <AntDesign name="pluscircle" size={80} color="rgb(17, 100, 186)" />

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 90,
        height: 90,
        borderRadius: 45,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        right: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        textTransform: 'uppercase'
    }
}); 