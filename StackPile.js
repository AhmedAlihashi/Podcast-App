import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import {
  LoginScreen,
  RegisterScreen,
  AuthLoadingScreen,
  OnBoard,
  Root,
  Podcast,
} from "./src/screens";

const Stack = createStackNavigator();

const Core = () => {
  return (
    <Stack.Navigator initialRouteName="AuthLoadingScreen">
      <Stack.Screen
        name="InitialRoute"
        component={AuthLoadingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnBoard"
        component={OnBoard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Root"
        component={Root}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Podcast"
        component={Podcast}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      {/* 
    for later use
      <Stack.Screen
        name="Shop"
        component={Shop}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Blog"
        component={Blog}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Previous"
        component={Previous}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default Core;
