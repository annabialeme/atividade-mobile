import React from "react";
import { SafeAreaView, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { FlipInEasyX } from "react-native-reanimated";

export default function Home ({ navigation, aluno }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <TextInput style={styles.input} placeholder="Buscar música" onChangeText={text => setInputText(text)} />
                    <Card style={styles.cards}></Card>
                    <Card style={styles.cards}></Card>
                    <Card style={styles.cards}></Card>
                <Card style={styles.card}>
                    <Card style={styles.circulo}>
                        <Text style={styles.text}>gyeydeyfgdyefgygyf</Text>
                        <Image source={require("")} style={styles.image} />
                        <TextInput style={styles.input1}>
                            <TouchableOpacity style={styles.botao}></TouchableOpacity>    
                        </TextInput>
                    </Card>
                </Card>

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