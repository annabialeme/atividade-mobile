import React from "react";
import {View, Text, StylesSheet} from "react-native";
import { boolean } from "yargs";

const Card = ({title}) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
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