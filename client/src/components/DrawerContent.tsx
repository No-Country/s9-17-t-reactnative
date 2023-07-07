import { View, StyleSheet, StyleProp } from 'react-native'
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
  Profile
}



const DrawerContent = () => {
  const navigation = useNavigation()
  return (
    <DrawerContentScrollView
      contentContainerStyle={style.DrawerContainer}
    >
      <DrawerItem
        icon={Icons.Profile}
        style={style.DrawerItem}
        labelStyle={style.DrawerLabel}
        label={"Perfil"}
        onPress={() => { navigation.navigate("home") }}
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
      <View style={{ ...style.ViewStyle, flex: 1 }}>
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
      <View style={style.ViewStyle}>
        <DrawerItem
          icon={Icons.Logout}
          style={style.DrawerItem}
          labelStyle={style.DrawerLabel}
          label={"Cerrar sesión"}
          onPress={() => { navigation.navigate("home") }}
        />
      </View>
    </DrawerContentScrollView>
  )
}

export default DrawerContent

const style = StyleSheet.create<StyleProp<any>>({
  DrawerContainer: {
    flex: 1,
    marginHorizontal: "5%",
    marginTop: "30%"
  },
  ViewStyle: {
    borderTopColor: "#FFA800",
    borderTopWidth: 1
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