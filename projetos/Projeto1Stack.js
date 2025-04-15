import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/HomeScreen";
import ProfileScreen from "../pages/ProfileScreen";
import dados from "../data/dados";

const Stack = createNativeStackNavigator();

export default function Projeto1Stack() {
    const aluno = dados [0];
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home">{(props) =>< HomeScreen {...props} aluno={nome} />}</Stack.Screen>
            <Stack.Screen name="Profile">{(props) =><ProfileScreen {...props} aluno={nome} />}</Stack.Screen>
        </Stack.Navigator>
    );
}