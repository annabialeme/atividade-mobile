import React from 'react';
import { View } from 'react-native';

import Octicons from '@expo/vector-icons/Octicons';

export default function Footer() {
    return (
        <View style={StyleSheet.footer}>
            <Octicons name="dot" size={24} color="black" />
            <Octicons name="dot" size={24} color="black" />
            <Octicons name="dot" size={24} color="black" />
            <Octicons name="dot-fill" size={24} color="black" />
            <Octicons name="dot" size={24} color="black" />
        </View>
    );
}