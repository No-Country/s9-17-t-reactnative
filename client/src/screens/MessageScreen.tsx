import { View, Text } from 'react-native'
import React from 'react'
import NoMessagesIcon from "../assets/icons/noMessagesIcon.svg"

const MessageScreen = () => {
  return (
    <View className='flex-1 items-center py-12'>
      <Text className='text-lg font-medium'>Todavía no tenés mensajes</Text>
      <View className=' ml-9 my-auto  '>
        <NoMessagesIcon />
      </View>
    </View>
  )
}

export default MessageScreen