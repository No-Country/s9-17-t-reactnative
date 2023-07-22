import { View, SafeAreaView, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Search from "../components/Search";

import { getTrips } from "../features/trip/tripSlice";
import { useAppDispatch } from "../app/hooks";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import AvailableTripsComponent from "../components/AvailableTripsComponent";

const Tab = createMaterialTopTabNavigator();
const HomeScreen = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(getTrips())
  }, [])
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Search />,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="relative h-full ">
      <View className="bg-[#ffaa00] max-w-full">
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: "#000" },
          tabBarPressColor: "transparent",
          lazy: true,
          tabBarScrollEnabled: true,
          tabBarItemStyle: { width: 95 },
          tabBarStyle: { backgroundColor: '#ffaa00' },
          lazyPlaceholder: Loading
        }}
      >
        <Tab.Screen name="Lunes" component={AvailableTripsComponent} />
        <Tab.Screen name="Martes" component={AvailableTripsComponent} />
        <Tab.Screen name="Miercoles" component={AvailableTripsComponent} />
        <Tab.Screen name="Jueves" component={AvailableTripsComponent} />
        <Tab.Screen name="Viernes" component={AvailableTripsComponent} />
        <Tab.Screen name="Sabado" component={AvailableTripsComponent} />
        <Tab.Screen name="Domingo" component={AvailableTripsComponent} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;
const Loading = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-semibold">Cargando viajes...</Text>
    </View>
  )
}