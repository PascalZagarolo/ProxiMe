import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text className="text-gray-900/80 ">
       Willkommen bei <Text className="font-bold text-lg text-gray-900"> Proximity </Text>        
        </Text>
      <StatusBar style="auto" />
      <View className="mt-2 bg-blue-800">
      <Button
      color="black"
      
      title='Direkt anfangen'
      onPress={() => {setCounter(counter + 1)}}
      />
      </View>
      
        
      
      
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
