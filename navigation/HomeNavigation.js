import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Projeto1Stack from "../projetos/Projeto1Stack";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                tabBarIcon: ({ color, size }) => ( // Define o ícone da aba usando o componente Icon
                    <Icon name="home" color={color} size={size} />
                ),
            }}
        />
            <Tab.Screen name="Profile" component={ProfileScreen}options={{
                    tabBarIcon: ({ color, size }) => ( // Define o ícone da aba usando o componente Icon
                        <Icon name="person" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}