import React from "react"; 
import { View, Text, Image} from "react-native"; 

export default function Profile2() {
    return (
        <View style={styles.container}> 
            <Image style={styles.image} source ={require('./assets/luanad.jpg')} />
            <Text style={styles.title}>Bem-vindo a segunda página</Text>
        </View>
    );
}