import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons'; // 6.2.2


import HomeScreen from "./screens/Home";

import UpdateScreen from "./screens/Updates";
import Game from "./screens/game";
import JokeScreen from "./screens/joke"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
   
        <Stack.Screen name="Updates" component={UpdateScreen} />
        <Stack.Screen name="game" component={Game} />
        <Stack.Screen name="joke" component={JokeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;