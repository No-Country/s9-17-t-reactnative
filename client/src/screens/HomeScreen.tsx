import { View, Text, FlatList, ScrollView, Image, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Search from "../components/Search";
import { Entypo } from "@expo/vector-icons";


const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const newViaje = (): void => {
    navigation.navigate("newTrip")
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Search />,
    });
  }, [navigation]);

  useEffect(() => {
    fetchData("https://randomuser.me/api/?results=20");
  }, []);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
      setFilteredData(json.results);
      // console.log(json.results);
    } catch (error) {
      console.log(error);
    }
  };

  const days = [
    { id: "0", title: "Lunes" },
    { id: "1", title: "Martes" },
    { id: "2", title: "Miercoles" },
    { id: "3", title: "Jueves" },
    { id: "4", title: "Viernes" },
    { id: "5", title: "Sabado" },
    { id: "6", title: "Domingo" },
  ];

  const renderItem = ({ item }: any) => (
    <View className="mx-2">
      <Text className="text-lg">{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView className="relative h-full pb-4 ">
      <View className="bg-[#FFA800] w-full">
        <FlatList
          className="ml-8  mb-4 w-full "
          data={days}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text className="text-center my-4 font-bold text-2xl">
        Viajes Disponibles
      </Text>
      <TouchableOpacity
       onPress={newViaje}
      className="absolute w-22 h-14 border-2 rounded-2xl bg-yellow-500 bottom-12 right-6 justify-center items-center z-50">
        <View className="flex flex-row justify-evenly items-center px-2">
        <Entypo  name="plus" size={30} />
        <Text className="font-bold text-sm" >Nuevo Viaje</Text>
        </View>
      </TouchableOpacity>
      <ScrollView className="mt-5 px-4 gap-2">
        {filteredData.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("requestTrip", { item: item })}
              key={index}
              className="border-2 p-2 rounded-lg shadow-md shadow-slate-900 flex flex-row gap-y-2 gap-x-4"
            >
              
              <Image
                className="w-16 h-16 rounded-full"
                source={{ uri: item.picture.large }}
              />
              <View>

              
             <View className="flex - flex-row">
              <View className="flex justify-between items-center">
                <Entypo name="dot-single" size={27} />     
                <Entypo  name="dots-three-vertical" size={10} />
                
                <Entypo name="location-pin" size={27} />
              </View>
              <View className="flex justify-between">
                <Text>
                  {item.name.first} {item.name.last}{" "}
                </Text>
                <Text className="">
                  {item.location.city} {item.location.state}
                </Text>
              </View>
              </View>
              <View className="w-full border-b-2 my-2" ></View>
              <View className="w-full flex flex-row gap-x-20" >
                <View className="flex flex-row">

              <Entypo name="calendar" size={18} />
              <Text>Lunes</Text>
                </View>
                <View className="flex flex-row" >

              <Entypo name="clock" size={18} />
              <Text>18:00hs</Text>
                </View>
              </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
     
    </SafeAreaView>
  );
};

export default HomeScreen;
