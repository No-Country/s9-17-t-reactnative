import { View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";
import { TextInputMask } from 'react-native-masked-text'

const NewTrip = () => {
  const navigation = useNavigation();
  const [hour, setHour] = useState("")

  const next = (): void => {
    navigation.navigate("newtripdetail")
  };

  return (
    <SafeAreaView className="flex w-full h-full">
      <ScrollView contentContainerStyle={{}} className="px-4 py-5 flex-1 h-full gap-y-3">
        <View className="flex flex-row justify-center mt-4" >
          <View className=" rounded-l-3xl py-2 px-6 bg-[#FFA800] border-amber-300 border-2 " ><Text>Recorrido</Text></View>
          <View className=" py-2 px-6 border-amber-300 border-y-2"><Text>Detalles</Text></View>
          <View className="py-2 px-6 border-amber-300 border-2 rounded-r-3xl"><Text>Seguridad</Text></View>
        </View>
        <View className="w-full  flex h-fit px-3 ">
          <Shadow containerStyle={{ marginVertical: 15 }} className="w-full px-4 py-7 flex rounded-md" >
            <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-start items-center mb-5 ">
              < Entypo name="location-pin" size={14} />
              <Text className="ml-2" >Punto de Origen</Text>

            </View>
            <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-start  items-center">
              < Entypo name="home" size={14} />
              <TextInput
                className="flex-1 ml-2 w-full"
                placeholder="Nombre del establecimiento (Si aplica)"
              />
            </View>
          </Shadow>

          <Shadow containerStyle={{ marginVertical: 15 }} className="w-full px-4 py-7 flex rounded-md"  >
            <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-start items-center mb-5 ">
              < Entypo name="location-pin" size={14} />
              <Text className="ml-2" >Destino</Text>

            </View>
            <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-start  items-center ">
              < Entypo name="home" size={14} />
              <TextInput
                className="w-full flex-1 ml-2"
                placeholder="Nombre del establecimiento (Si aplica)"
              />
            </View>
          </Shadow>

          <Shadow containerStyle={{ marginVertical: 15 }} className="w-full px-4 py-7 flex rounded-md" >
            <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-start items-center mb-5 ">
              < Entypo name="calendar" size={14} />
              <Text className="ml-2" >15/07/2023</Text>

            </View>
            <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-start  items-center">
              < Entypo name="clock" size={14} />
              <TextInputMask
                className="pr-[80%] ml-2"
                placeholder="12:00"
                onChangeText={(e) => setHour(e)}
                type={'datetime'}
                options={{
                  format: 'HH:mm'
                }}
              />

            </View>
          </Shadow>

        </View>
        <View>
          <TouchableOpacity
            onPress={next}
            className="w-full p-2 my-[10%] bg-[#FFA800] rounded-full">
            <Text className="text-center text-lg font-semiboldbold">Siguiente</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView >
  )
}

export default NewTrip
