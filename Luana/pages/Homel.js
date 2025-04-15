import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const MobileScreen = () => {
return (
<ScrollView contentContainerStyle={styles.container}>

<TouchableOpacity style={styles.backButton}>
<Text style={styles.backArrow}>←</Text>
</TouchableOpacity>


<View style={styles.cardContainer}>
<View style={styles.card}></View>
<View style={styles.card}></View>
<View style={styles.card}></View>
</View>

<View style={styles.textBlock}>
<Text style={styles.textLine}>Linha de texto 1</Text>
<Text style={styles.textLine}>Linha de texto 2</Text>
<Text style={styles.textLine}>Linha de texto 3</Text>
<Text style={styles.textLine}>Linha de texto 4</Text>
</View>


<TouchableOpacity style={styles.bottomButton}>
<Text style={styles.buttonText}>Botão</Text>
</TouchableOpacity>
</ScrollView>

);
};

const styles = StyleSheet.create({
container: {
padding: 22,
paddingTop: 40,
backgroundColor: '#F5F5F5',
minHeight: '100%',
},

backButton: {
position: 'absolute',
top: 40,
left: 20,
backgroundColor: '#EEE',
padding: 10,
borderRadius: 20,
zIndex: 10,
},

backArrow: {
fontSize: 20,
},

cardContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 60,
},

card: {
width: '30%',
height: 80,
backgroundColor: '#DDD',
borderRadius: 10,
},

textBlock: {
marginTop: 30,
},

textLine: {
height: 20,
backgroundColor: '#E0E0E0',
marginVertical: 4,
borderRadius: 5,
},

bottomButton: {
marginTop: 40,
backgroundColor: '#CCC',
paddingVertical: 15,
borderRadius: 20,
alignItems: 'center',
},

buttonText: {
fontWeight: 'bold',
},
});

