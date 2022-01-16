import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';      
import { createDrawerNavigator } from '@react-navigation/drawer';

import Contacts from './src/pages/contacts/';
import Information from './src/pages/information/';

const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      {/* StackNavigation */}
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Contacts"
          component={Contacts}
        />
        <Stack.Screen
          name="Information"
          component={Information}
        />
      </Stack.Navigator> */}
      {/* Drawer Navigation */}
      <Drawer.Navigator>
        <Drawer.Screen
          name="Contacts"
          component={Contacts}
        />
        <Drawer.Screen
          name="Information"
          component={Information}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
