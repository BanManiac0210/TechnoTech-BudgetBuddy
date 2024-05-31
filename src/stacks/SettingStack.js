import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../screens/Setting/SettingScreen";

const Stack = createStackNavigator();

export default function SettingStack() {
  return (
      <Stack.Navigator initialRouteName="SettingScreen">
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
}