import React from "react";
import {View, Text, StylesSheet} from "react-native";
import { ScrollView } from "react-native-web";

const Card = ({title}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
            <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StylesSheet.create({
    card: {
        margin: 5,
        backgroundColor: '#fff',
    },
    cardContent: {
        padding: 15,
    },
});

export default Card;