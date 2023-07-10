import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ArrowBack from "../assets/icons/arrowBack.svg"
import tw from 'tailwind-react-native-classnames'

const ArrowBackComponent = () => {
  const navigation = useNavigation()

  return (
    <ArrowBack width={35} height={35} style={tw.style(`absolute top-6 left-3 z-10 `)} onPress={() => navigation.goBack()} />
  )
}

export default ArrowBackComponent