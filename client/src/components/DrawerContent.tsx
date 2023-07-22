import { View, StyleSheet, Text, Image } from 'react-native'
import React, { ReactNode } from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'

import Bank from "../assets/icons/Bank.svg"
import Car from "../assets/icons/Car.svg"
import ChatsCircle from "../assets/icons/ChatsCircle.svg"
import CreditCard from "../assets/icons/CreditCard.svg"
import Logout from "../assets/icons/Logout.svg"
import Notifications from "../assets/icons/Notifications.svg"
import Profile from "../assets/icons/profile.svg"
import Plus from "../assets/icons/Plus.svg"
import profimeImg from "../assets/imgTest/profile1.jpg";
import { useAppDispatch } from '../app/hooks'
import { login } from '../features/user/userSlice'

type Icons = {
  Bank: (props: { focused: boolean; size: number; color: string; }) => ReactNode;
  Car: (props: { focused: boolean; size: number; color: string; }) => ReactNode;
  ChatsCircle: (props: { focused: boolean; size: number; color: string; }) => ReactNode;
  CreditCard: (props: { focused: boolean; size: number; color: string; }) => ReactNode;
  Logout: (props: { focused: boolean; size: number; color: string; }) => ReactNode;
  Notifications: (props: { focused: boolean; size: number; color: string; }) => ReactNode;
  Profile: (props: { focused: boolean; size: number; color: string; }) => ReactNode;
}

const Icons: Icons = {
  Bank,
  Car,
  ChatsCircle,
  CreditCard,
  Logout,
  Notifications,
  Profile,
}



const DrawerContent = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation()
  return (
    <DrawerContentScrollView
      contentContainerStyle={style.DrawerContainer}
    >
      <View
        className='bg-[#FFA800] absolute top-0 w-full h-[13vh] flex-row items-center p-[6%]'
      >
        <Image source={profimeImg} className={`aspect-square w-[25%] rounded-full mr-3`} />
        <Text className='text-base font-normal'>Julián Taboga</Text>
      </View>
      <View className='mx-[5%] flex-1'>
        <DrawerItem
          icon={Icons.Profile}
          style={style.DrawerItem}
          labelStyle={style.DrawerLabel}
          label={"Perfil"}
          onPress={() => { navigation.navigate("myProfile") }}
        />
        <View style={style.ViewStyle}>
          <DrawerItem
            icon={Icons.CreditCard}
            style={style.DrawerItem}
            labelStyle={style.DrawerLabel}
            label={"Medios de pago"}
            onPress={() => { navigation.navigate("home") }}
          />
          <DrawerItem
            icon={Icons.Bank}
            style={style.DrawerItem}
            labelStyle={style.DrawerLabel}
            label={"Medios de cobro"}
            onPress={() => { navigation.navigate("home") }}
          />
        </View>
        <View style={style.ViewStyle}>
          <DrawerItem
            icon={Icons.Car}
            style={style.DrawerItem}
            labelStyle={style.DrawerLabel}
            label={"Mis viajes"}
            onPress={() => { navigation.navigate("home") }}
          />
        </View>
        <View style={style.ViewStyle}>
          <DrawerItem
            icon={Icons.Notifications}
            style={style.DrawerItem}
            labelStyle={style.DrawerLabel}
            label={"Solicitudes"}
            onPress={() => { navigation.navigate("home") }}
          />
          <DrawerItem
            icon={Icons.ChatsCircle}
            style={style.DrawerItem}
            labelStyle={style.DrawerLabel}
            label={"Mensajes"}
            onPress={() => { navigation.navigate("home") }}
          />
        </View>
        <View style={{ ...style.ViewStyle, flex: 1 }}>
          <View className={`absolute top-4 left-1  rounded-full bg-inherit z-10`}>
            <Plus width={15} height={15} />
          </View>
          <DrawerItem
            icon={Icons.Car}
            style={style.DrawerItem}
            labelStyle={style.DrawerLabel}
            label={"Nuevo viaje"}
            onPress={() => { navigation.navigate("newTrip") }}
          />
        </View>
        <View style={style.ViewStyle}>
          <DrawerItem
            icon={Icons.Logout}
            style={style.DrawerItem}
            labelStyle={style.DrawerLabel}
            label={"Cerrar sesión"}
            onPress={() => { dispatch(login(null)) }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  )
}

export default DrawerContent

const style = StyleSheet.create({
  DrawerContainer: {
    flex: 1,
    paddingTop: "50%",
  },
  ViewStyle: {
    position: "relative",
    borderTopColor: "#FFA800",
    borderTopWidth: 1,
  },
  DrawerItem: {
    marginHorizontal: "auto"
  },
  DrawerLabel: {
    marginLeft: -20,
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 18,
    color: "#333"
  }
})