
import { NavigationAction } from '@react-navigation/native';
import { ArrowRight, User2 } from 'lucide-react-native';
import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';




const HomeScreen = ({
   
}) => {



    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>
                Willkommen bei
                <Text style={styles.name}> Proximity. </Text>
            </Text>
            <View style={{ marginTop: 20 }}>
                <Pressable onPress={() => { console.log("Hallo") }} style={styles.button}>
                    <View style={{justifyContent : 'center', alignItems: 'center', flexDirection : 'column'}}>
                        <Text style={styles.buttonText} > Direkt starten
                            <View style={styles.icon}>
                                <ArrowRight color='white' style={styles.icon} />
                            </View>
                        </Text>
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

    },
    name: {
        fontWeight: 'normal'
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 16,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,

    },
    icon: {
        marginLeft: 16,
    }
});


export default HomeScreen;

