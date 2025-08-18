import React from "react"; 
import { SafeAreaView, View, Text, TextInput, StyleSheet } from "react-native";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Footer from "./components/Footer";

import Octicons from '@expo/vector-icons/Octicons';


export default function TabScreen() {
    return (
        <SafeAreaView styles={styles.container}>
            <Text style={styles.title}>Harry Styles</Text>
            <Card1 image={require('./assets/')} />
            <Card1 image={require('./assets/')} />
            <View style={styles.input}>
                <TextInput style={styles.input} placeholder="O que você deseja ouvir hoje?" />
                <Octicons name="dot" size={24} color="black" />
            </View>
            <Card2 image={require('./assets/')} text="Harry Styles é o primeiro álbum de estúdio do cantor britânico Harry Styles, lançado em 2017. O álbum conta com dez faixas, incluindo o single Sign of the Times."/>
            <Card2 image={require('./assets/')} text="Fine Line é o segundo álbum de estúdio do cantor britânico Harry Styles, lançado em 2019. O álbum é descrito como pop rock, com elementos de outros gêneros."/>
            <Card2 image={require('./assets/')} text="Harry's House é o terceiro álbum de estúdio do cantor britânico Harry Styles, lançado em 2022. O álbum conta com 13 faixas. A canção As It Was foi a mais bem sucedida do álbum."/>
            <Footer />
        </SafeAreaView>
    );
}