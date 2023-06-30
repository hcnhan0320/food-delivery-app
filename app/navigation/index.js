import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
   OnboardingScreen,
   SplashScreen,
   SigninScreen,
   SignupScreen,
   ForgotPasswordScreen,
} from '../screens';

const Stack = createStackNavigator();

const AppNav = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SigninScreen} />
            <Stack.Screen
               name="ForgotPassword"
               component={ForgotPasswordScreen}
            />
            <Stack.Screen name="SignUp" component={SignupScreen} />
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default AppNav;
