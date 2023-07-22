import * as React from "react";
import { View, TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { getTripsFiltered } from "../features/trip/tripSlice";

const Search = () => {
  const [input, setInput] = useState("")
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getTripsFiltered(input))
  }, [input])
  return (
    <View className="flex-1 flex-row my-3 px-3 justify-center items-center gap-x-2 rounded-full bg-white">
      <TextInput className=" text-xs"
        placeholder="Busqueda por usuario, Estabelcimiento, Destino"
        onChangeText={(e) => {
          setInput(e)
        }}
      />
      <View className="">
        <Entypo name="magnifying-glass" size={27} />
      </View>
    </View>
  )

}

export default Search
