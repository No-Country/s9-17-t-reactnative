import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View className={`flex-auto items-center`}>
      <Text>RegisterScreen</Text>
      <Button title='Go to login' onPress={() => navigation.navigate("login")} />
    </View>
  )
}

export default RegisterScreen