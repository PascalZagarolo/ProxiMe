import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Homescreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <View style={styles.container}>
      <Text>
        <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Welcome' }} />
        </Text>
      
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, button : {
    backgroundColor : 'black',
    borderRadius: 10,
  }
})
;
