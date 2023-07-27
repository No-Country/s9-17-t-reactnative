import { View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";
import { TextInputMask } from 'react-native-masked-text'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createNewTrip } from "../features/trip/tripSlice";
import Boton from "../components/Boton";

import CircleBlack from '../assets/icons/CircleBlack.svg'
import PointedLine from '../assets/icons/PointedLine.svg'
import MapPin from '../assets/icons/MapPin.svg'
const TravelCreated = () => {
  const newTrip = useAppSelector(store => store.trip.createTrip)
  const navigation = useNavigation()
  const day = new Date(newTrip.day_of_travel)
  
  // console.log(day.);
  return (
    <View className="flex-1 items-center py-8 ">
      <Text className="text-base font-medium mb-10">¡Creaste un nuevo viaje!</Text>
      <Shadow
        style={{
          minWidth: "85%",
          borderRadius: 16,
        }}
      >
        <View
          className=" flex flex-row  p-2 w-max bg-white rounded-2xl items-center "
        >
          <Image
            className="w-16 h-16 rounded-full mr-2"
            source={{ uri: "https://static.wikia.nocookie.net/doblaje/images/5/50/BadBunnyBio.png/revision/latest?cb=20220719063105&path-prefix=es" }}
          />
          <View className=' flex-1'>
            <View className={`h-min py-1 gap-y-1 border-b-[1px] border-b-gray-300`}>
              <View className={` pl-2 gap-y-[2px] max-w-[70%]`}>
                <View className={`flex-row items-center  ml-[-3px] mb-[-5px] `}>
                  <CircleBlack />
                  <Text className={`ml-3 text-sm font-normal`}>{newTrip.origin}</Text>
                </View>
                <PointedLine />
                <View className={`flex-row items-start ml-[-11px]`}>
                  <MapPin width={24} height={24} />
                  <Text className={`ml-1 text-sm font-normal`}>{`${newTrip.destination}`}</Text>
                </View>
              </View>
            </View>
            <View className="w-full flex flex-row justify-between py-2" >
              <View className="flex flex-row">

                <Entypo name="calendar" size={20} />
                <Text className='ml-2 text-sm font-normal'>{day.toLocaleDateString()}</Text>
              </View>
              <View className="flex flex-row" >

                <Entypo name="clock" size={20} />
                <Text className='ml-2 text-sm font-normal'>{newTrip.hour}</Text>
              </View>
            </View>
          </View>
        </View>
      </Shadow>
      <View className="w-5/6 mt-auto">
        <Boton
          action={() => navigation.navigate("Home")}
          text="Aceptar"
        />
      </View>
    </View>
  )

}

export default TravelCreated