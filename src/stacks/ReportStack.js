// ReportScreen includes budget and charts

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StatisticScreen from "../screens/Statistic/StatisticScreen";
import AddBudgetScreen from "../screens/Statistic/AddBudgetScreen";
import EditBudgetScreen from "../screens/Statistic/EditBudgetScreen";

const Stack = createStackNavigator();

export default function ReportStack() {
  return (
      <Stack.Navigator initialRouteName="StatisticScreen">
        <Stack.Screen
          name="StatisticScreen"
          component={StatisticScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddBudgetScreen"
          component={AddBudgetScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditBudgetScreen"
          component={EditBudgetScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
}