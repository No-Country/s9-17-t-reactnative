import { View, Text, SafeAreaView, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';
import { Shadow } from 'react-native-shadow-2';
import Patente from "../assets/icons/Patente.svg"
import Car from "../assets/icons/Car.svg"
import PaintBucket from "../assets/icons/PaintBucket.svg"
import Cash from "../assets/icons/Cash.svg"
import Boton from '../components/Boton';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CircleBlack from '../assets/icons/CircleBlack.svg'

const NewTripSecurity = () => {
  const [isEnabled, setisEnable] = useState(false)
  const [isChecked, setisChecked] = useState(false)
  const toggleSwitch = () => {
    setisEnable(!isEnabled)

  }
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView>
        <View className="flex flex-row justify-center mt-4" >
          <View className=" flex flex-row rounded-l-3xl py-2 px-4 justify-center items-center bg-[#fbc862a2] border-amber-300 border-2 " >
            <Entypo name="check" size={13} />
            <Text className="ml-1" >Recorrido</Text>
          </View>
          <View className="flex flex-row py-2 px-4 justify-center items-center bg-[#fbc862a2] border-amber-300 border-2">
            <Entypo name="check" size={13} />
            <Text className="ml-1">Detalles</Text>
          </View>
          <View className="py-2 px-6 border-amber-300 border-2 rounded-r-3xl  bg-[#FFA800]"><Text>Seguridad</Text></View>
        </View>
        <View className='m-4'>
          <Shadow containerStyle={{ marginVertical: 15 }} className="w-full px-4 py-7 flex rounded-md gap-y-3" >
            <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-between gap-x-2 items-center">
              <Car />
              <TextInput
                className="flex-1"
                keyboardType="numeric"
                placeholder="Marca y Modelo de vehículo"
              />
            </View>
            <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-between gap-x-2 items-center">
              <Patente />
              <TextInput
                className="flex-1"
                keyboardType="numeric"
                placeholder="Patente"
              />
            </View>
            <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-between gap-x-2 items-center">
              <PaintBucket />
              <TextInput
                className="flex-1"
                keyboardType="numeric"
                placeholder="Color"
              />
            </View>
          </Shadow>
          <Shadow containerStyle={{ marginVertical: 15 }} className="w-full px-4 py-7 flex rounded-md gap-y-3" >
            <Text className="flex-1 text-base font-normal">Tarifa por pasajero</Text>
            <Text className="flex-1 text-sm font-normal opacity-50">Se calcula diviendo el gasto de combustible por la cantidad de pasajeros que accedes a llevar.</Text>
            <View className=" border-b-[#FFA800] pb-2 border-b-2 flex flex-row justify-between gap-x-2 items-center">
              <TextInput
                className="flex-1 text-base font-normal"
                keyboardType="numeric"
                placeholder="$100"
              />
            </View>
          </Shadow>
          <Shadow containerStyle={{ marginVertical: 15 }} className="w-full px-4 py-7 flex rounded-md  divide-y divide-[#6666] " >
            <View className='flex flex-row gap-x-2 items-center '>
              <Cash />
              <Text className="flex-1 text-sm font-medium">Acepto efectivo</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#FFA800' }}
                thumbColor={isEnabled ? '#FFA800' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View className='py-3'>
              <BouncyCheckbox
                size={20}
                fillColor="black"
                textStyle={{ color: "#000" }}
                text="Me comprometo a no lucrar con este viaje"
                checkIconImageSource={CircleBlack}
                innerIconStyle={{ borderWidth: 2 }}
                onPress={(isChecked: boolean) => { setisChecked(isChecked) }}
                isChecked={isChecked}
              />
            </View>
          </Shadow>
          <View className='my-3'>
            <Boton isDisable={!isChecked} action={undefined} text={"Crear nuevo viaje"} />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NewTripSecurity