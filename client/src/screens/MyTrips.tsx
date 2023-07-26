import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import HaventTrips from "../assets/icons/HaventTrips.svg"
import { useNavigation } from '@react-navigation/native'
import MapPinWhite from '../assets/icons/MapPinWhite.svg'
import LineWhite from '../assets/icons/LineWhite.svg'
import ClockWhite from '../assets/icons/ClockWhite.svg'
import EllipseWhite from '../assets/icons/EllipseWhite.svg'
import CalendarWhite from '../assets/icons/CalendarWhite.svg'
import { Shadow } from 'react-native-shadow-2'
import { useAppSelector } from '../app/hooks'
const MyTrips = () => {
  const tripsConfirmed = useAppSelector(store => store.user.user.tripsConfirmed)
  const trip = useAppSelector(store => store.trip.trips)
  const navigation = useNavigation()

  return (
    <View className='flex-1 items-center py-12'>
      {tripsConfirmed.length > 0 ?
        <ScrollView contentContainerStyle={{ alignItems: "center", width: "100%", gap: 24, paddingBottom: 30 }}>
          <Text className="text-center  font-bold text-2xl">
            Viajes confirmados
          </Text>
          {trip.map((item, index) => {
            if (tripsConfirmed.includes(item.login.uuid)) {
              return (
                <Shadow
                  key={"confirmed-" + index}
                  style={{
                    minWidth: "85%",
                    borderRadius: 16,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("requestTrip", { item: item })}
                    className=" flex flex-row  p-2 w-max bg-[#6750A4] rounded-2xl items-center"
                  >
                    <Image
                      className="w-16 h-16 rounded-full mr-2"
                      source={{ uri: item.picture.large }}
                    />
                    <View className=' flex-1'>
                      <View className={`h-min py-1 gap-y-1 border-b-[1px] border-b-gray-300`}>
                        <View className={` pl-2 gap-y-[2px] max-w-[70%]`}>
                          <View className={`flex-row items-center  ml-[-3px] mb-[-5px]`}>
                            <EllipseWhite />
                            <Text className={`ml-3 text-sm font-normal text-white`}>{item.location.state}</Text>
                          </View>
                          <LineWhite />
                          <View className={`flex-row items-start ml-[-11px]`}>
                            <MapPinWhite width={24} height={24} />
                            <Text className={`ml-1 text-sm font-normal text-white`}>{`${item.location.city}, ${item.location.state}`}</Text>
                          </View>
                        </View>
                      </View>
                      <View className="w-full flex flex-row justify-between py-2" >
                        <View className="flex flex-row">

                          <CalendarWhite size={20} />
                          <Text className='ml-2 text-sm font-normal text-white'>{item.day}</Text>
                        </View>
                        <View className="flex flex-row" >

                          <ClockWhite size={20} />
                          <Text className='ml-2 text-sm font-normal text-white'>18:00hs</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Shadow>
              )
            }
          })}

        </ScrollView>
        :
        <>
          <Text className='text-lg font-medium'>Todavía no realizaste <Text className='text-[#6750A4]'>ningún viaje</Text></Text>
          <View className='m-auto'>
            <HaventTrips />
          </View>
          <TouchableOpacity
            className='rounded-full bg-[#FFA800] min-w-[80%] items-center p-3'
            onPress={() => navigation.navigate("Home")}
          >
            <Text>Solicitar viaje</Text>
          </TouchableOpacity>
        </>
      }
    </View>
  )
}

export default MyTrips