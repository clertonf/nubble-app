import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IconProps} from '@components';
import {
  SignInScreen,
  SignUpScreen,
  SuccessScreen,
  ForgotPasswordScreen,
} from '@screens';

export type RootStackParamsList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignInScreen"
        screenOptions={{headerShown: false, gestureEnabled: true}}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
