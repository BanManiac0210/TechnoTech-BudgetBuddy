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
          name="MSMainScreen"
          component={MoneySourceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MSDetailScreen"
          component={MoneySourceDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MSEditScreen"
          component={MoneySourceEditScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
}