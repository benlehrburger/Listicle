import React from "react";
import logo from './logo2.png';
import { StyleSheet, Text, Image, Dimensions } from 'react-native';

export default function Logo() {
    return (
        <Image source={logo} style={styles.logoSize} />
    );
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    logoSize: {
        width: 300,
        height: 150,
        position: 'absolute',
        bottom: screenHeight * 0.45
    }
});