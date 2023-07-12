import { View, Text, FlatList, ScrollView, Image,TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Search from "../components/Search";
import { Entypo } from "@expo/vector-icons";


const NewTripDetail = () =>{
  const navigation = useNavigation();

  
  const next = (): void => {
    navigation.navigate("newtripdetail")
  };
  useEffect(() => {
    navigation.setOptions({
      
      headerLeft: () => (
        <TouchableOpacity className="pl-3"  onPress={() => navigation.navigate("newTrip")}>
            < Entypo name="chevron-left" size={24} />
          </TouchableOpacity>
      )
    });
  }, [navigation]);


  return(
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
      <View className="pt-[10%] w-full flex justify-center items-center gap-y-[10%] ">
        <View className="px-[10%] py-[8%] flex gap-y-4 shadow-md shadow-slate-100 rounded-md">
          <View className=" border-b-[#FFA800] pb-2 border-b-2 flex  justify-start  gap-x-2 ">
        
          <Text className=" mb-2">Lugares Disponibles</Text>
          <Text className="text-sm text-slate-500" >Recorda que debes de contar con un cinturon de seguridad por cada pasajero</Text>
          
          </View>
          <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-between gap-x-2 items-center">
         <Text>1 Asiento disponible</Text>
         < Entypo name="chevron-down" size={14} />
          </View>
        </View>
          
       
      </View>

      <TextInput className="mt-[10%] rounded-md"
        multiline
        numberOfLines={4}
        placeholder="Anade aclaraciones o notas en caso de ser necesario.
        por ejemplo: Parada para cargar combustible
        "
        style={{ borderWidth: 1, borderColor: 'gray', padding: 15 }}
      />
    
      <TouchableOpacity 
       onPress={next}
      className="w-full p-2 my-[10%] bg-[#FFA800] rounded-full">
        <Text className="text-center text-lg font-semiboldbold">Siguiente</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NewTripDetail
