import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MyProfile from '../screens/MyProfile'
import UserCommentsProfile from '../screens/UserCommentsProfile'
import EditProfile from '../screens/optionsProfile/editProfile'

const Stack = createNativeStackNavigator()

const NoAuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' component={LoginScreen}/>
      <Stack.Screen name='register' component={RegisterScreen}/>
      <Stack.Screen name='myprofile' component={MyProfile}/>
      <Stack.Screen name='myprofile-comments' component={UserCommentsProfile}/>
      <Stack.Screen name='editProfile' component={EditProfile}/>

    </Stack.Navigator>
  )
}

export default NoAuthNavigation;