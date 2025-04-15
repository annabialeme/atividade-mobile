import React from "react";
import HomeScreen from "../pages/HomeScreen";
import ProfileScreen from "../pages/ProfileScreen";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home"

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
            <Tab.Screen name="Home" component={Home}options={{
                    tabBarIcon: ({ color, size }) => ( // Define o ícone da aba usando o componente Icon
                        <Icon name="close" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}