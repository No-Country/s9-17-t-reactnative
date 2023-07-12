import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Search = () =>{

        


    return (
        <View className="py-3 relative">
        <TextInput className="border-2 text-xs border-slate-700 rounded-full bg-slate-50 px-1"
        placeholder="Busqueda por usuario, Estabelcimiento, Destino"
        />
        <View className="absolute top-[40%] right-2">
        <Entypo  name="magnifying-glass" size={27} />
        </View>
        </View>
      )

}

export default Search
