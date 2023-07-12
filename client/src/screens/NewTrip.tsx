import { View, Text, FlatList, ScrollView, Image,TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Search from "../components/Search";
import { Entypo } from "@expo/vector-icons";


const NewTrip = () =>{
  const navigation = useNavigation();

  
  const next = (): void => {
    navigation.navigate("newtripdetail")
  };
  useEffect(() => {
    navigation.setOptions({
      
      headerLeft: () => (
        <TouchableOpacity className="pl-3"  onPress={() => navigation.goBack()}>
            < Entypo name="chevron-left" size={24} />
          </TouchableOpacity>
      )
    });
  }, [navigation]);


  return(
    <SafeAreaView className="flex w-full h-full px-4 py-2">
      <ScrollView className="pb-10">
      <View className="flex flex-row justify-center mt-4" >
        <View className=" rounded-l-3xl py-2 px-6 bg-[#FFA800] border-amber-300 border-2 " ><Text>Recorrido</Text></View>
        <View className=" py-2 px-6 border-amber-300 border-y-2"><Text>Detalles</Text></View>
        <View className="py-2 px-6 border-amber-300 border-2 rounded-r-3xl"><Text>Seguridad</Text></View>
      </View>
      <View className="pt-[10%] w-full flex justify-center items-center gap-y-[10%] ">
        <View className="px-[10%] py-[8%] flex gap-y-2 shadow-md shadow-slate-100 rounded-md">
          <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-start items-center gap-x-2 ">
        < Entypo  name="location-pin" size={14} />
          <Text >Punto de Origen</Text>
          
          </View>
          <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-start gap-x-2 items-center">
          < Entypo name="home" size={14} />
          <TextInput
          placeholder="Nombre del establecimiento (Si aplica)"
          />
          </View>
        </View>
        
        <View className="px-[10%] py-[8%] flex gap-y-2 shadow-md shadow-slate-100 rounded-md">
          <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-start items-center gap-x-2 ">
        < Entypo  name="location-pin" size={14} />
          <Text >Destino</Text>
          
          </View>
          <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-start gap-x-2 items-center">
          < Entypo name="home" size={14} />
          <TextInput
          placeholder="Nombre del establecimiento (Si aplica)"
          />
          </View>
        </View>

        <View className="px-[10%] w-full py-[8%] flex gap-y-2 shadow-md shadow-slate-100 rounded-md">
          <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-start items-center gap-x-2 ">
        < Entypo  name="calendar" size={14} />
          <Text >15/07/2023</Text>
          
          </View>
          <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-start gap-x-2 items-center">
          < Entypo name="clock" size={14} />
          <Text> 16:15</Text>
          </View>
        </View>
       
      </View>
    
      <TouchableOpacity 
       onPress={next}
      className="w-full p-2 my-[10%] bg-[#FFA800] rounded-full">
        <Text className="text-center text-lg font-semiboldbold">Siguiente</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NewTrip
