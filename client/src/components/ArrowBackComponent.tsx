import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ArrowBack from "../assets/icons/ArrowLeft.svg"
import tw from 'tailwind-react-native-classnames'
import { TouchableOpacity } from 'react-native'

const ArrowBackComponent = ({ edit }: { edit?: string }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={tw.style(`pl-3`, edit)} onPress={() => navigation.goBack()}>
      <ArrowBack />
    </TouchableOpacity>
  )
}

export default ArrowBackComponent