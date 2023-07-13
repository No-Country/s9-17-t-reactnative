import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
  requestSent: boolean,
  requestAccepted: boolean,
  setRequestSent: React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonReqTravel = ({ requestSent, requestAccepted, setRequestSent }: Props) => {
  return (
    <View className={`h-min my-auto`}>
      {
        !requestAccepted ?
          <TouchableOpacity
            onPress={() => setRequestSent(true)}
            disabled={requestSent}
            className={`p-[10] m-4 rounded-full ${requestSent ? "bg-[#C4C4C4]" : "bg-[#f1c40f]"}`}
          // style={tw.style(`p-[10] mx-4 rounded-full`, requestSent ? `bg-[#C4C4C4]` : `bg-[#f1c40f]`)}
          >
            <Text
              className={`text-center text-base font-medium ${requestSent ? "text-[#777]" : "text-black"}`}
            >
              {
                requestSent ?
                  "Solicitud enviada"
                  :
                  "Pedir viaje"
              }
            </Text>
          </TouchableOpacity>
          :
          <TouchableOpacity className={`m-4`}>
            <Text className={`text-center underline font-medium text-base text-[#6750A4]`}>Viaje aceptado</Text>
          </TouchableOpacity>
      }
    </View>
  )
}
export default ButtonReqTravel
