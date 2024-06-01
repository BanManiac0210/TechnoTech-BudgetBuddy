import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MoneySourceScreen from "../screens/MoneySource/MoneySourceScreen";
import MoneySourceDetailScreen from "../screens/MoneySource/MSDetailScreen";
import MoneySourceEditScreen from "../screens/MoneySource/MSEditScreen";

const Stack = createStackNavigator();

export default function MoneySourceStack() {
  return (
      <Stack.Navigator initialRouteName="MSMainScreen">
        <Stack.Screen
          name="MoneySourceScreen"
          component={MoneySourceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoneySourceDetailScreen"
          component={MoneySourceDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoneySourceEditScreen"
          component={MoneySourceEditScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
}