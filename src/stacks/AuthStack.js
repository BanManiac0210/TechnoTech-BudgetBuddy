import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Authen/LoginScreen";
import Onboarding1 from "../screens/Onboarding/Onboarding_1";
import Onboarding2 from "../screens/Onboarding/Onboarding_2";
import Onboarding3 from "../screens/Onboarding/Onboarding_3";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
      <Stack.Navigator initialRouteName="Onboarding1">
        <Stack.Screen
          name="OnboardingScreen1"
          component={Onboarding1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnboardingScreen2"
          component={Onboarding2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoardingScreen3"
          component={Onboarding3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
}