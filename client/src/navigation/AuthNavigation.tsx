import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent';
import NewTrip from '../screens/NewTrip';
import NewTripDetail from '../screens/NewTripDetail';
import ReqTripScreen from '../screens/ReqTripScreen';
import MyProfile from '../screens/MyProfile';
import UserCommentsProfile from '../screens/UserCommentsProfile';

const Drawer = createDrawerNavigator();

const AuthNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        headerShown: true, headerShadowVisible: false, headerStyle: {
          backgroundColor: "#FFA800"
        }
      }}
    >
      <Drawer.Screen options={{ title: "" }} name="Home" component={HomeScreen} />
      <Drawer.Screen options={{ title: "", headerShown: false }} name="myProfile" component={MyProfile} />
      <Drawer.Screen options={{ title: "", headerShown: false }} name="requestTrip" component={ReqTripScreen} />
      <Drawer.Screen options={{ title: "", headerShown: false }} name='myprofile-comments' component={UserCommentsProfile} />
      <Drawer.Screen options={{
        title: "Crear Nuevo Viaje",
        headerTitleAlign: "center",
      }} name="newTrip" component={NewTrip} />
      <Drawer.Screen options={{
        title: "Crear Nuevo Viaje",
        headerTitleAlign: "center",
      }} name="newtripdetail" component={NewTripDetail} />
    </Drawer.Navigator>

  )
}


export default AuthNavigation
