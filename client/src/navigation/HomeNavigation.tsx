import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
const Tab = createMaterialTopTabNavigator();
export default function HomeNavigation() {
  return (
    <Tab.Navigator
    >
      <Tab.Screen name="Lunes" component={HomeScreen} />
      <Tab.Screen name="Martes" component={HomeScreen} />
      <Tab.Screen name="Miercoles" component={HomeScreen} />
      <Tab.Screen name="Jueves" component={HomeScreen} />
      <Tab.Screen name="Viernes" component={HomeScreen} />
      <Tab.Screen name="Sabado" component={HomeScreen} />
      <Tab.Screen name="Domingo" component={HomeScreen} />
    </Tab.Navigator>
  )
}