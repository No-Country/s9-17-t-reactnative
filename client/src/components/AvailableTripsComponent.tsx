import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Shadow } from 'react-native-shadow-2';
import { useAppSelector } from '../app/hooks';
import { Entypo } from "@expo/vector-icons";
import CircleBlack from '../assets/icons/CircleBlack.svg'
import PointedLine from '../assets/icons/PointedLine.svg'
import MapPin from '../assets/icons/MapPin.svg'

export default function AvailableTripsComponent({ route }) {
  const navigation = useNavigation();
  const tripsFiltered = useAppSelector(store => store.trip.tripsFiltered)
  const trip = useAppSelector(store => store.trip.trips)
  let showTrips = tripsFiltered.length && tripsFiltered || trip

  useEffect(() => {
    showTrips = tripsFiltered

  }, [tripsFiltered])

  useEffect(() => {
    console.log(showTrips);

  }, [])

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ alignItems: "center", width: "100%", gap: 24, paddingTop: 10, paddingBottom: 30 }}>
        <Text className="text-center  font-bold text-2xl">
          Viajes Disponibles
        </Text>
        {showTrips?.map((item, index) => {
          if (item.day === route.name) {
            return (
              <Shadow
                key={index}
                style={{
                  minWidth: "85%",
                  borderRadius: 16,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("requestTrip", { item: item })}
                  className=" flex flex-row  p-2 w-max bg-white rounded-2xl items-center "
                >
                  <Image
                    className="w-16 h-16 rounded-full mr-2"
                    source={{ uri: item.picture.large }}
                  />
                  <View className=' flex-1'>
                    <View className={`h-min py-1 gap-y-1 border-b-[1px] border-b-gray-300`}>
                      <View className={` pl-2 gap-y-[2px] max-w-[70%]`}>
                        <View className={`flex-row items-center  ml-[-3px] mb-[-5px] `}>
                          <CircleBlack />
                          <Text className={`ml-3 text-sm font-normal`}>{item.location.state}</Text>
                        </View>
                        <PointedLine />
                        <View className={`flex-row items-start ml-[-11px]`}>
                          <MapPin width={24} height={24} />
                          <Text className={`ml-1 text-sm font-normal`}>{`${item.location.city}, ${item.location.state}`}</Text>
                        </View>
                      </View>
                    </View>
                    <View className="w-full flex flex-row justify-between py-2" >
                      <View className="flex flex-row">

                        <Entypo name="calendar" size={20} />
                        <Text className='ml-2 text-sm font-normal'>{item.day}</Text>
                      </View>
                      <View className="flex flex-row" >

                        <Entypo name="clock" size={20} />
                        <Text className='ml-2 text-sm font-normal'>18:00hs</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </Shadow>
            );
          }
        })
        }
      </ScrollView>
    </View>
  )
}