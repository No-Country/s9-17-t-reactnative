import React, { useEffect } from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent';
import NewTrip from '../screens/NewTrip';
import NewTripDetail from '../screens/NewTripDetail';
import ReqTripScreen from '../screens/ReqTripScreen';
import MyProfile from '../screens/MyProfile';
import UserCommentsProfile from '../screens/UserCommentsProfile';
import Search from '../components/Search';

import { getTrips } from "../features/trip/tripSlice";
import { useAppDispatch } from "../app/hooks";
import MessageScreen from '../screens/MessageScreen';
import ArrowBackComponent from '../components/ArrowBackComponent';
import MyTrips from '../screens/MyTrips';
import NewTripSecurity from '../screens/NewTripSecurity';
const Drawer = createDrawerNavigator();

const AuthNavigation = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTrips())
  }, [])
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        headerShown: true, headerShadowVisible: false, headerStyle: {
          backgroundColor: "#FFA800"
        }
      }}
    >
      <Drawer.Screen options={{ headerTitle: () => <Search /> }} name="Home" component={HomeScreen} />
      <Drawer.Screen options={{ title: "", headerShown: false }} name="myProfile" component={MyProfile} />
      <Drawer.Screen options={{ title: "", headerShown: false }} name="requestTrip" component={ReqTripScreen} />
      <Drawer.Screen
        options={{
          title: "Mensajes",
          headerTitleAlign: "center",
          headerLeft: () => (<ArrowBackComponent />)
        }}
        name="messages"
        component={MessageScreen}
      />
      <Drawer.Screen
        options={{
          title: "Mis viajes",
          headerTitleAlign: "center",
          headerLeft: () => (<ArrowBackComponent />)
        }}
        name="mytrips"
        component={MyTrips}
      />
      <Drawer.Screen options={{ title: "", headerShown: false, }} name='myprofile-comments' component={UserCommentsProfile} />
      <Drawer.Screen options={{
        title: "Crear Nuevo Viaje",
        headerTitleAlign: "center",
        headerLeft: () => (<ArrowBackComponent />)
      }} name="newTrip" component={NewTrip} />
      <Drawer.Screen options={{
        title: "Crear Nuevo Viaje",
        headerTitleAlign: "center",
        headerLeft: () => (<ArrowBackComponent />)
      }} name="newtripdetail" component={NewTripDetail} />
      <Drawer.Screen options={{
        title: "Crear Nuevo Viaje",
        headerTitleAlign: "center",
        headerLeft: () => (<ArrowBackComponent />)
      }} name="newtripsecurity" component={NewTripSecurity} />
    </Drawer.Navigator>

  )
}


export default AuthNavigation
