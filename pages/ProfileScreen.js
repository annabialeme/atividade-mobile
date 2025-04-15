import React from "react";
import { StyleSheet, View } from "react-native";

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Image source={require("../assets/img/fotovalentim.png")} style={styles.image} />
                <Text style={styles.title}></Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})
