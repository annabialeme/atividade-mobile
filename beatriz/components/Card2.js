import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';

export default function Card2({ image, text }) {
    return (
        <View style={StyleSheet.card2}>
            <Image style={styles.image}>{image}</Image>
            <Text style={styles.text}>{text}</Text>
            <AntDesign name="plus" size={24} color="black" />
        </View>
    );
}