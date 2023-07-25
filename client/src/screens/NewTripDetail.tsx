import { View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";


const NewTripDetail = () => {
  const navigation = useNavigation();


  const next = (): void => {
    navigation.navigate("newtripsecurity")
  };

  return (
    <SafeAreaView className="flex w-full h-full px-4 py-2">
      <ScrollView className="pb-10">
        <View className="flex flex-row justify-center mt-4" >
          <View className=" flex flex-row rounded-l-3xl py-2 px-4 justify-center items-center bg-[#fbc862a2] border-amber-300 border-2 " >
            < Entypo name="check" size={13} />
            <Text className="ml-1" >Recorrido</Text>
          </View>
          <View className=" py-2 px-6 border-amber-300 border-y-2 bg-[#FFA800]"><Text>Detalles</Text></View>
          <View className="py-2 px-6 border-amber-300 border-2 rounded-r-3xl"><Text>Seguridad</Text></View>
        </View>
        <View className=" w-full flex px-2 mt-4">
          <Shadow containerStyle={{ marginVertical: 15 }} className="w-full px-4 py-7 flex rounded-md" >
            <View className="pb-2 flex  justify-start  gap-x-2 ">

              <Text className=" mb-2">Lugares Disponibles</Text>
              <Text className="text-sm text-slate-500" >Recorda que debes de contar con un cinturon de seguridad por cada pasajero</Text>

            </View>
            <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-between gap-x-2 items-center">
              <TextInput
                className="flex-1"
                keyboardType="numeric"
                placeholder="Cantidad de asientos disponibles"
              />
            </View>
          </Shadow>
        </View>

        <TextInput className="mt-[10%] mx-3 rounded-md"
          multiline
          numberOfLines={4}
          placeholder="Añade aclaraciones o notas en caso de ser necesario.
        por ejemplo: Parada para cargar combustible.
        "
          style={{ borderWidth: 1, borderColor: 'gray', padding: 15 }}
        />

        <TouchableOpacity
          onPress={next}
          className="w-full p-2 my-[10%] bg-[#FFA800] rounded-full">
          <Text className="text-center text-lg font-semiboldbold">Siguiente</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView >
  )
}

export default NewTripDetail
