import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Card1({ image }) {
    return (
        <View style={styles.card1}>
            <Image style={styles.image}>{image}</Image>
        </View>
    );
}