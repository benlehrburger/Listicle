import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import StartButton from './Button.js';
import Logo from './Logo.js';


export default function Loading({ navigation }) {
  return (
    <View style={styles.siteContainer}>
      <StatusBar style="auto" />
      <Logo />
      <StartButton navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  siteContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
