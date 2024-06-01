import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./stacks/AuthStack";
import AppTab from "./tabs/AppTab";
import { FlatListComponent } from "react-native";

const Stack = createStackNavigator();

const isLoggedIn = true; // Temp

export default function MainStack() {
  return (
    <NavigationContainer>   
      <Stack.Navigator initialRouteName={isLoggedIn? "AppTab" : "AuthStack"}>
        <Stack.Screen 
          name="AppTab" 
          component={AppTab} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthStack" 
          component={AuthStack} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}