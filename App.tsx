import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Homescreen';


export default function App() {

  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text><HomeScreen/></Text>
      
    </View>
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
