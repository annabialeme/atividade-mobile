import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Image} from "react-native";

export default function ProfileScreen({ navigation, aluno }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Text>Detalhes de {aluno.nome}</Text>
                <Button title="Voltar" onPress={() => navigation.goBack()} />
                <Image source={require("../assets/img/fotovalentim.png")} style={styles.image} />
            </ScrollView>
        </SafeAreaView>
    )
}