import { View, Text} from "react-native";
  import React, { useState } from "react";
  
  const ThirdViewForm = () => {
    const [front, setFront] = useState('')
    const [behind, setBehind] = useState('')
    return (
      <View className={`w-full h-full flex items-center mt-[10px] px-[17px]`} >
        <Text className="text-base py-[33px]">Por favor, escanea tu documento de identidad para validar el registro</Text>
        {front === ''? <Text className="text-base font-semibold ">Frente de tu documento</Text>:<Text className="text-base font-semibold ">Dorso de tu documento</Text>}
      </View>
    );
  };
  
  export default ThirdViewForm;
  