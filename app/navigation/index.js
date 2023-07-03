import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
   OnboardingScreen,
   SplashScreen,
   SigninScreen,
   SignupScreen,
   ForgotPasswordScreen,
   RegisterPhoneScreen,
   VerificationScreen,
   HomeScreen,
} from '../screens';
import { useSelector, useDispatch } from 'react-redux';
import { GeneralAction } from '../actions';

const Stack = createStackNavigator();

const AppNav = () => {
   const { isAppLoading, token, isFirstTimeUse } = useSelector(
      (state) => state?.generalState
   );

   console.log('token: ', token);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(GeneralAction.appStart());
   }, []);
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAppLoading ? (
               <Stack.Screen name="Splash" component={SplashScreen} />
            ) : !token || token === null || token === '' ? (
               <>
                  {isFirstTimeUse && (
                     <Stack.Screen
                        name="Onboarding"
                        component={OnboardingScreen}
                     />
                  )}

                  <Stack.Screen name="SignIn" component={SigninScreen} />
                  <Stack.Screen name="SignUp" component={SignupScreen} />
                  <Stack.Screen
                     name="RegisterPhone"
                     component={RegisterPhoneScreen}
                  />
                  <Stack.Screen
                     name="ForgotPassword"
                     component={ForgotPasswordScreen}
                  />

                  <Stack.Screen
                     name="Verification"
                     component={VerificationScreen}
                  />
               </>
            ) : (
               <Stack.Screen name="Home" component={HomeScreen} />
            )}
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default AppNav;
