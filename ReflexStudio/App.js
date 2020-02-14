import React, {Component, memo} from 'react';
import {View, StyleSheet} from 'react-native';

//Redux
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
//Navigation
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Style
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, light as theme} from '@eva-design/eva';

//Components
import {
  Reflex,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Previous,
  ArchivePlayer,
  OnBoard,
  Root,
  Podcast,
} from './src/screens';

//Methods
import {
  logoutUser,
  signInUser,
  loginUser,
  sendEmailWithPassword,
} from './src/auth/auth-api';

//State
const initialState = {
  res: 's',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GetData':
      return {res: 'xxx'};
    default:
      return state;
  }
};

const store = createStore(reducer);

const Stack = createStackNavigator();

///////////////////////////////////////////////////////////////////

const Core = () => {
  return (
    <Stack.Navigator initialRouteName="InitialRoute">
      <Stack.Screen name="InitialRoute" component={AuthLoadingScreen} />
      <Stack.Screen
        name="OnBoard"
        component={OnBoard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Root"
        component={Root}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Reflex"
        component={Reflex}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Podcast"
        component={Podcast}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <ApplicationProvider mapping={mapping} theme={theme}>
          <NavigationContainer>
            <Core />
          </NavigationContainer>
        </ApplicationProvider>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
  },
  podcast: {},
  reflex: {},
});
