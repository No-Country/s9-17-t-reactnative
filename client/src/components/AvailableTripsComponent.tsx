import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Shadow } from 'react-native-shadow-2';
import { useAppSelector } from '../app/hooks';
import { Entypo } from "@expo/vector-icons";
import CircleBlack from '../assets/icons/CircleBlack.svg'
import PointedLine from '../assets/icons/PointedLine.svg'
import MapPin from '../assets/icons/MapPin.svg'
import NoTripsIcon from '../assets/icons/noTripsIcon.svg'

export default function AvailableTripsComponent({ route }) {
  const [thereTrips, setThereTrips] = useState<boolean>()
  const navigation = useNavigation();
  const tripsFiltered = useAppSelector(store => store.trip.tripsFiltered)
  const trip = useAppSelector(store => store.trip.trips)
  const [showTrips, setShowTrips] = useState([])
  useEffect(() => {
    trip.length &&
      (
        setShowTrips(tripsFiltered.length && tripsFiltered || trip),
        setThereTrips(true)
      )
  }, [trip])

  useEffect(() => {
    tripsFiltered.length && setShowTrips(tripsFiltered)
    !tripsFiltered.length && setThereTrips(false)
  }, [tripsFiltered])

  useEffect(() => {
    showTrips.length && setThereTrips(true)
    !showTrips.length && setThereTrips(false)
  }, [showTrips])


  return (
    <View className="flex-1 bg-white">
      {trip.length > 0 ?
        <>
          {thereTrips && showTrips.some(item => item.day === route.name) ?
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
                  )
                }
              })
              }
            </ScrollView>
            :
            <View className='flex-1 items-center justify-evenly'>
              <Text className='text-[18px] font-medium'>Todavía no hay <Text className='text-[#6750A4]'>viajes publicados</Text></Text>
              <NoTripsIcon width="80%" height="80%" className='' />
              <TouchableOpacity
                className='rounded-full bg-[#FFA800] min-w-[80%] items-center p-3'
                onPress={() => navigation.navigate("newTrip")}
              >
                <Text>Publicar nuevo viaje</Text>
              </TouchableOpacity>
            </View>
          }</>
        :
        <Loading />
      }
    </View >
  )
}

const Loading = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-semibold">Cargando viajes...</Text>
    </View>
  )
}