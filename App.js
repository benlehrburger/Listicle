import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import CustomList from './customList.js';
import Loading from './Load.js';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: () => (
            <Image
              source={require('./logo2.png')}
              style={{ width:70, height: 35, bottom: 5  }}
            />
          ),
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTintColor: '#000000',
        }}
      >
        <Stack.Screen name="Home" component={Loading} options={{ headerShown: false }} />
        <Stack.Screen name="List" component={CustomList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  siteContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;