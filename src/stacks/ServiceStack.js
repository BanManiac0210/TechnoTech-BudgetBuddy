import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddScreen from "../screens/Services/AddScreen";
import AddMoneySourceScreen from "../screens/Services/AddMSScreen";
import AddIncomeScreen from "../screens/Services/AddIncomeScreen";
import AddExpenseScreen from "../screens/Services/AddExpenseScreen";
import AddTransferScreen from "../screens/Services/AddTransferScreen";
import AddDebtScreen from "../screens/Services/AddDebtScreen";
import AddSavingScreen from "../screens/Services/AddSavingScreen";

const Stack = createStackNavigator();

export default function ServiceStack() {
  return (
      <Stack.Navigator initialRouteName="StatisticScreen">
        <Stack.Screen
          name="AddScreen"
          component={AddScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddMoneySourceScreen"
          component={AddMoneySourceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddIncomeScreen"
          component={AddIncomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddExpenseScreen"
          component={AddExpenseScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddTransferScreen"
          component={AddTransferScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddDebtScreen"
          component={AddDebtScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddSavingScreen"
          component={AddSavingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
}