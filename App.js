import 'react-native-gesture-handler';
import React from 'react';

import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhotoShow from './components/PhotoShow';

const Stack = createStackNavigator();

// Create a component
function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="albumList"
          component={AlbumList}
          options={{ title: 'Albums' }}
        />
        <Stack.Screen
          name="photoList"
          component={PhotoList}
          options={{ title: 'Fotos' }}
        />
        <Stack.Screen
          name="photoShow"
          component={PhotoShow}
          options={{ title: 'Foto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
export default App;