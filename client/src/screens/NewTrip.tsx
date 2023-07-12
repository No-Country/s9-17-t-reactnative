import { View, Text, FlatList, ScrollView, Image, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Search from "../components/Search";
import { Entypo } from "@expo/vector-icons";


const NewTrip = () =>{
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      
      headerLeft: () => (
        <TouchableOpacity className="pl-3" onPress={() => navigation.goBack()}>
            < Entypo name="chevron-left" size={24} />
          </TouchableOpacity>
      )
    });
  }, [navigation]);


  return(
    <View>
      <Text>Nuevo Viaje</Text>
    </View>
  )
}

export default NewTrip
