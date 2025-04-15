import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card() {
    return (
        <View style={styles.card}>
        <Text style={styles.title}>Text</Text>
        <Text style={styles.content}>Text</Text>
        </View>
    );

}