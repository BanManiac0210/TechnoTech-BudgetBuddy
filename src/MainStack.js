import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./stacks/AuthStack";
import AppTab from "./tabs/AppTab";

const Stack = createStackNavigator();

const isLoggedIn = true; // Temp

export default function MainStack() {
  return (
    isLoggedIn?
    <AppTab />
    : 
    <NavigationContainer>   
      <Stack.Navigator initialRouteName="AuthStack">
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}