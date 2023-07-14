import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ArrowBack from "../assets/icons/ArrowLeft.svg"
import tw from 'tailwind-react-native-classnames'
import { TouchableOpacity} from 'react-native'

const ArrowBackComponent = ({ isBg }: { isBg?: boolean }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={tw.style(`absolute top-6 left-5 z-10 rounded-full p-1`, isBg && 'bg-white')} onPress={() => navigation.goBack()}>
      <ArrowBack width={20} height={20} />
    </TouchableOpacity>
  )
}

export default ArrowBackComponent