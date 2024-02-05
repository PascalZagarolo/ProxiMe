
import { ArrowRight, User2 } from 'lucide-react-native';
import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>
                Willkommen bei
                <Text style={styles.name}> Proximity. </Text>
            </Text>
            <View style={{ marginTop: 20 }}> 
                <Pressable onPress={() => { console.log("Hallo") }} style={styles.button}>
                    <View style={styles.buttonContent}>
                        <Text style={styles.buttonText}> Direkt loslegen </Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
         // Increase margin bottom for welcome text
    },
    name: {
        fontWeight: 'normal'
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 4,
        textAlign: 'center',
        borderColor: 'black',
        color: 'black',
    },
    buttonContent: {
        padding: 10, // Adjust padding here for spacing
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    }
})

export default HomeScreen;

