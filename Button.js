import React from 'react';
import { Button, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';


const StartButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('List')}
    >
      <Text style={styles.text}>Get Started</Text>
    </TouchableOpacity>
  );
};

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10, 
    borderWidth: 1,
    borderColor: '#7d7d7d',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    position: 'absolute',
    bottom: screenHeight * 0.32
  },
  text: {
    color: '#616161',
    fontSize: 16
  }
});

export default StartButton;
