import React from "react";
import logo from './logo.png';
import { StyleSheet, Text, Image, Dimensions } from 'react-native';

export default function Logo() {
    return (
        <Image source={logo} style={styles.logoSize} />
    );
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    logoSize: {
        width: 200,
        height: 200,
        position: 'absolute',
        bottom: screenHeight * 0.45
    }
});