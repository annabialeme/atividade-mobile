import React from "react";
import {View, Text} from "react-native";

import Card from '../components/Card'

return (
    <Card/>
)

export default function Home({titulo,texto}) {

    <View style={styles.container}>
        <Text>
            {titulo}: {texto}
        </Text>

        <Image source={require("../assets/shasha.jpg")} style={styles.image} />

        <Text>
            {titulo}: {texto}
        </Text>
        
    </View>

}