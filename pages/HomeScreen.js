import React from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, ScrollView, TextInput, View } from "react-native-web";

export default function Home ({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <TextInput style={styles.input} placeholder="Buscar música" onChangeText={text => setInputText(text)} />
                <TouchableOpacity style={styles.button} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})