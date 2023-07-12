import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const AuthNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{ headerShown: true, headerShadowVisible: false,  headerStyle:{
        backgroundColor:"#FFA800"
      } }}
    >
      <Drawer.Screen options={{title:""}} name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  )
}

export default AuthNavigation
