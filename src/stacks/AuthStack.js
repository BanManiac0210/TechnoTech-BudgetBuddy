import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Authen/LoginScreen";
import Onboarding1 from "../screens/Onboarding/Onboarding_1";
import Onboarding2 from "../screens/Onboarding/Onboarding_2";
import Onboarding3 from "../screens/Onboarding/Onboarding_3";
import InitMoneySourceScreen from "../screens/Onboarding/InitMSScreen";
import AddInitMoneySourceScreen from "../screens/Onboarding/AddInitMSScreen";
import InitCategoryScreen from "../screens/Onboarding/InitCategoryScreen";
import AddCategoryScreen from "../screens/Onboarding/AddCategoryScreen";
import Login from "../screens/Authen/Login";
import Signup from "../screens/Authen/Signup";
import Success from "../screens/Authen/Success";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
      <Stack.Navigator initialRouteName="Onboarding1">
        <Stack.Screen
          name="Onboarding1"
          component={Onboarding1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding2"
          component={Onboarding2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding3"
          component={Onboarding3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sigup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="InitMoneySourceScreen"
          component={InitMoneySourceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddInitMoneySourceScreen"
          component={AddInitMoneySourceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InitCategoryScreen"
          component={InitCategoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddCategoryScreen"
          component={AddCategoryScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
  );
}