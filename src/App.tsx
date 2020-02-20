import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import Home from './screens/Home';
import DrinkList from './screens/Drinks/DrinkList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="Drinks"
          options={{headerShown: false}}
          component={DrinkList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
