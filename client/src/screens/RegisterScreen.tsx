import { View, TouchableOpacity, Text, Image } from "react-native";
import React, { useState } from "react";
import check from '../assets/icons/check_24px.png'
import FirstViewForm from "./Register/FirstViewRegisterForm";
import SecondViewForm from "./Register/SecondViewForm";
import ThirdViewForm from "./Register/ThirdViewForm";
import ArrowLeft from "../assets/icons/Arrow-back.png";
import Navigation from "../navigation/Navigation";
import { useNavigation } from "@react-navigation/native";

const FormRegister = () => {
  const [view, setView] = useState(1)
  const navigation = useNavigation()
  const viewForm = (view: number) => {
    switch (view) {
      case 1:
        return <FirstViewForm setView={setView} />;
      case 2:
        return <SecondViewForm setView={setView} />;
      case 3:
        return <ThirdViewForm setView={setView} />;
      default:
        return null;
    }
  };


  return (

    <View className={`flex w-full h-full bg-[#fff]`}>
      {/* Header */}
      <View className={`flex flex-row justify-start items-center h-[74px] bg-[#FFA800]`}>
        <TouchableOpacity onPress={()=> navigation.navigate('login')}>
          <Image source={ArrowLeft} className="ml-3 h-4 w-4"/>
        </TouchableOpacity>
        <Text className="text-lg ml-[125px]">Registro</Text>
      </View>
      <View className="flex flex-row mx-auto w-[330px] my-[24px] ">
        {view > 1 ?
            <TouchableOpacity className="flex flex-row h-[34px] w-[110px] justify-center items-center rounded-l-lg  bg-[#FFC149] border-x-[#FFC149] border-y-[#FFC149]">
              <Image source={check} className="h-4 w-4 " />
              <Text className="ml-3 active:text-black">Paso 1</Text>
            </TouchableOpacity> :
            <TouchableOpacity className="h-[34px] w-[110px] justify-center items-center rounded-l-lg  border-x-[#FFC149] border-y-[#FFC149]">
              <Text className="text-[#333] active:text-black">Paso 1</Text>
            </TouchableOpacity>
        }
        {view > 2 ?
            <TouchableOpacity className="flex flex-row h-[34px] w-[110px] justify-center items-center bg-[#FFC149] border-x-[#FFC149] border-y-[#FFC149]">
              <Image source={check} className="h-4 w-4 " />
              <Text className="ml-3 active:text-black">Paso 2</Text>
            </TouchableOpacity> :
            <TouchableOpacity className="h-[34px] w-[110px]  justify-center items-center border-y-[#FFC149]">
              <Text className="text-[#333] active:text-black">Paso 2</Text>
            </TouchableOpacity>}
        {view === 3 ?
            <TouchableOpacity className="flex flex-row h-[34px] w-[110px] justify-center items-center rounded-r-lg border-x-[#FFC149] border-y-[#FFC149]">
              <Text className="ml-3 active:text-black">Paso 3</Text>
            </TouchableOpacity> :
            <TouchableOpacity className="h-[34px] w-[110px] justify-center items-center rounded-r-lg border-x-[#FFC149] border-y-[#FFC149]" >
              <Text className="text-[#333] active:text-black">Paso 3</Text>
            </TouchableOpacity>}
      </View>
      <View>
        {viewForm(view)}
      </View>
    </View>
  );
};

export default FormRegister;
