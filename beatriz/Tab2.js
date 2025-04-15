import React from "react"; 
import { View, Image, Text } from "react-native"; 

export default function Tab2() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source ={require('./assets/beatriz.jpg')} />
            <Text style={styles.title}>Beatriz Lima</Text>
        </View>
    );
}