import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Meu Perfil</Text>
            <Image source={require("../assets/eu.jpg")} style={styles.iamge} />
            <Text style={styles.titulo}>Nome: Anna Beatriz Leme Alves</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#89CFF0",
    },

    titulo: {
        fontWeight: "bold",
        marginTop: 5,
    },
})