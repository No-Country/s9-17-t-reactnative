import { View, TouchableOpacity, Text, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import arrowBack from "../assets/icons/Arrow-back.png";
import FirstViewForm from "./Register/FistViewRegisterForm";
import SecondViewForm from "./Register/SecondViewForm";
import ThirdViewForm from "./Register/ThirdViewForm";

const FormRegister = () => {
  const [clickView, setClickView] = useState(1)

  const navigation = useNavigation();

  // const nextView = setClickView(clickView +1)

  console.log(clickView)
  const viewForm = (clickButton: number) => {
    switch (clickView) {
      case 1:
        return <FirstViewForm className="bg-gray-200" />;
        break;
      case 2:
        return <SecondViewForm />;
        break;
      case 3:
        return <ThirdViewForm />;
        break;

    }
  }


  return (

    <View className={`flex w-full h-full bg-[#fff]`}>
      {/* Header */}
      <View className={`pt-[31px] pl-[31px]`}>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Image
            className="h-[18px] w-[18px]"
            source={arrowBack}
          />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row mx-auto w-[330px] mt-[11px] border-b-2 border-gray-200 ">
        <TouchableOpacity className="h-[34px] w-[110px] justify-center items-center active:bg-gray-200" title="paso1" onPress={() => setClickView(1)}
        >
          <Text className="text-[#333] active:text-black">Paso 1</Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-[34px] w-[110px] border-x-2 border-gray-200 justify-center items-center active:bg-gray-200" title="paso2" onPress={() => setClickView(2)}>
          <Text className="text-[#333] active:text-black">Paso 2</Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-[34px] w-[110px] justify-center items-center active:bg-gray-200" title="paso3" onPress={() => setClickView(3)}>
          <Text className="text-[#333] active:text-black">Paso 3</Text>
        </TouchableOpacity>
      </View>
      <View>
        {viewForm()}
      </View>
      <TouchableOpacity className="absolute flex justify-center items-center bottom-4 w-[292px] h-[37px] left-[36px] bg-[#D9D9D9]" onPress={() => setClickView(clickView + 1)}>
        <Text className="text-base">{clickView !== 3 ? 'Siguiente' : 'Finalizar'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormRegister;
