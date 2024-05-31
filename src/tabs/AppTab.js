import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../stacks/HomeStack";
import MoneySourceStack from "../stacks/MoneySourceStack";
import ReportStack from "../stacks/ReportStack";
import ServiceStack from "../stacks/ServiceStack";
import SettingStack from "../stacks/SettingStack";

const Tab = createBottomTabNavigator();

export default function AppTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Trang chủ"
                    component={HomeStack}
                    options={{ 
                        headerShown: false,
                        // tabBarIcon: ({ color, size, focused }) => (
                        //     <Ionicons
                        //       name={focused ? "settings" : "settings-outline"}
                        //       color={color}
                        //       size={size}
                        //     />
                        // ),
                    }}
                ></Tab.Screen>

                <Tab.Screen 
                    name="Nguồn tiền"
                    component={MoneySourceStack}
                    options={{ headerShown: false }}
                ></Tab.Screen>

                <Tab.Screen 
                    name="Tạo"
                    component={ServiceStack}
                    options={{ headerShown: false }}
                ></Tab.Screen>

                <Tab.Screen 
                    name="Báo cáo"
                    component={ReportStack}
                    options={{ headerShown: false }}
                ></Tab.Screen>

                <Tab.Screen 
                    name="Cài đặt"
                    component={SettingStack}
                    options={{ headerShown: false }}
                ></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}