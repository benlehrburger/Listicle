import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import List from './List.js';
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
              source={require('./icon.png')}
              style={{ width:30, height: 40, bottom: 5  }}
            />
          ),
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTintColor: '#7d7d7d',
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