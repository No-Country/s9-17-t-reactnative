import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const AuthNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='home' component={HomeScreen} />
    </Drawer.Navigator>
  )
}

export default AuthNavigation