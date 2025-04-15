import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Projeto1Stack from "../projetos/Projeto1Stack";
import Projeto2Stack from "../projetos/Projeto2Stack";
import Projeto3Stack from "../projetos/Projeto3Stack";
import Projeto4Stack from "../projetos/Projeto4Stack";
import Projeto5Stack from "../projetos/Projeto5Stack";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Projeto1" component={Projeto1Stack}
            options={{
                tabBarIcon: ({ color, size }) => ( // Define o ícone da aba usando o componente Icon
                    <Icon name="home" color={color} size={size} />
                ),
            }}
        />
            <Tab.Screen name="Projeto2" component={Projeto2Stack}
            options={{
                    tabBarIcon: ({ color, size }) => ( // Define o ícone da aba usando o componente Icon
                        <Icon name="person" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Projeto 3"
                component={Projeto3Stack}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name="search" color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Projeto 4"
                component={Projeto4Stack}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name="add" color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Projeto 5"
                component={Projeto5Stack}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name="notifications" color={color} size={size} />,
                }}
            />
        </Tab.Navigator>
    )
}