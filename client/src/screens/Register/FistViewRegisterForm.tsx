import { View, TouchableOpacity, Text, Image, SafeAreaView, Modal} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import arrowList from "../../assets/icons/navigate_before.png";
import { TextInput } from "react-native-paper";

const FirstViewForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [typeDni, setTypeDni] = useState("");
  const [numId, setNumId] = useState();
  const [plate, setPlate] = useState("");
  const [open, setOpen] = useState(false);
  const typeId = [
    { label: "DNI", value: "DNI" },
    { label: "CC", value: "CC" },
    { label: "TI", value: "TI" },
    { label: "PRUEBA", value: "PRUEBA" },
  ];

  const handleOpenList = () => {
    setOpen(true);
  };
  const handleCloseList = () => {
    setOpen(false);
  };

  const selectType = (type: string) => {
    setTypeDni(type);
    setOpen(false);
  };
  const navigation = useNavigation();
  
  console.log(name);
  return (
    <View className={`flex items-center mt-[10px] justify-start w-full h-full`}>
      <SafeAreaView className={`flex items-start w-11/12 `}>
        <TextInput
          className="w-full h-[71px] border-b-1 border-gray-300 p-0 bg-[#fff]"
          onChangeText={setName}
          value={name}
          placeholder="Nombre"
        />
        <TextInput
          className="w-full h-[71px] border-b-1 border-gray-300 bg-[#fff]"
          onChangeText={setLastName}
          value={lastName}
          placeholder="Apellido"
        />
        <View className=" w-full h-[71px] justify-end">
          <TouchableOpacity
            onPress={handleOpenList}
            className="flex flex-row items-end"
          >
            <Text className="w-1/2">
              {typeDni === "" ? "Tipo de identificación" : typeDni}
            </Text>
            <Image source={arrowList} />
          </TouchableOpacity>
          <Modal
            className="bg-slate-400"
            visible={open}
            transparent={true}
            onRequestClose={handleCloseList}
          >
            <View className="absolute bottom-[168px] left-[15px] bg-slate-400">
              {typeId.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => selectType(option.value)}
                >
                  <Text>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Modal>
        </View>
        <TextInput
          className="w-full h-[71px] border-b-1 border-gray-300 bg-[#fff]"
          onChangeText={setLastName}
          value={numId}
          placeholder="Número de identificación"
          keyboardType="number-pad"
        />
        <TextInput
          className="w-full h-[71px] border-b-1 border-gray-300 bg-[#fff]"
          onChangeText={setLastName}
          value={plate}
          placeholder="Matrícula"
        />
      </SafeAreaView>
      
    </View>
  );
};

export default FirstViewForm;
