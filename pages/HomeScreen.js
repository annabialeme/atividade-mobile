import React from "react";
import { SafeAreaView, ScrollView, TextInput, TouchableOpacity } from "react-native";

export default function Home ({ navigation, aluno }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <TextInput style={styles.input} placeholder="Buscar música" onChangeText={text => setInputText(text)} />
                <FlatList data={aluno.itens} keyExtractor={(index) => index.toString()} renderItem={({ item }) => <Text>{item}</Text>} />
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}/>
                <Text>Ver Perfil</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})