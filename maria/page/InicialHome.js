import React from "react";
import { View, Text, StylesSheet, Button } from "react-native";


export default function Home() {  {navigation}} {
    return (
        <View style={StylesSheet.container}>
        <Text style={style.text}>Bem vindo a minha página</Text>
        <Button title="Ir para a outra pagina" onPress={() => navigation.navigate("ProfileScreen")}/>
        </View>
    )
} 