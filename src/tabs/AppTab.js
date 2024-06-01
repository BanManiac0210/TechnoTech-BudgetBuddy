import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants/index.js"

import Icon from "react-native-vector-icons/FontAwesome";
import HomeStack from "../stacks/HomeStack";
import MoneySourceStack from "../stacks/MoneySourceStack";
import ReportStack from "../stacks/ReportStack";
import ServiceStack from "../stacks/ServiceStack";
import SettingStack from "../stacks/SettingStack";

const Tab = createBottomTabNavigator();

export default function AppTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarLabel: ({ focused }) => {
                    // return <Text style={styles.labelFont}>{route.name}</Text>
                    return (!focused || route.name == "Tạo")? null : <Text style={styles.labelFont}>{route.name}</Text>
                  },
                tabBarActiveTintColor: COLORS.purple_primary,
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name="Trang chủ"
                component={HomeStack}
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="home" size={25} color={COLORS.purple_primary} />
                    ),
                }}
            ></Tab.Screen>
            <Tab.Screen 
                name="Nguồn tiền"
                component={MoneySourceStack}
                options={{ 
                    headerShown: false ,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="money" size={25} color={COLORS.purple_primary} />
                    ),
                }}
            ></Tab.Screen>
            <Tab.Screen 
                name="Tạo"
                component={ServiceStack}
                options={{ 
                    headerShown: false ,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="plus-circle" size={50} color={COLORS.purple_primary} />
                    ),
                }}
            ></Tab.Screen>
            <Tab.Screen 
                name="Báo cáo"
                component={ReportStack}
                options={{ 
                    headerShown: false ,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="bar-chart-o" size={25} color={COLORS.purple_primary} />
                    ),
                }}
            ></Tab.Screen>
            <Tab.Screen 
                name="Cài đặt"
                component={SettingStack}
                options={{ 
                    headerShown: false ,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="gear" size={25} color={COLORS.purple_primary} />
                    ),
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    labelFont: {
        fontSize: 12
    },
})