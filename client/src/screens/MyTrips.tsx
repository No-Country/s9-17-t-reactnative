import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HaventTrips from "../assets/icons/HaventTrips.svg"
import { useNavigation } from '@react-navigation/native'

const MyTrips = () => {
  const navigation = useNavigation()
  return (
    <View className='flex-1 items-center py-12'>
      <Text className='text-lg font-medium'>Todavía no realizaste <Text className='text-[#6750A4]'>ningún viaje</Text></Text>
      <View className='m-auto'>
        <HaventTrips />
      </View>
      <TouchableOpacity
        className='rounded-full bg-[#FFA800] min-w-[80%] items-center p-3'
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Solicitar viaje</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MyTrips