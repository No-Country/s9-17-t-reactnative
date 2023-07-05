import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAppDispatch } from '../app/hooks'
import { login } from '../features/user/userSlice'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation();
  return (
    <View className={`flex-auto items-center`}>
      <Text>LoginScreen</Text>
      <Button title='Login' onPress={() => dispatch(login())} />
      <Button title='Go to register' onPress={() => navigation.navigate("register")} />
    </View>
  )
}

export default LoginScreen