import {View, Text, Image} from "react-native";
import React, { useState } from "react";
import elipse from "../../assets/imgTest/Ellipse.png";

const SecondViewForm = () => {
  return (
    <View className={`flex items-center mt-[10px] justify-start w-full h-full`}>
      <Text className="text-base pt-[33px]">
        Por favor, escanea tu rostro para validar tu identidad
      </Text>
      <View>
        <Image className="h-[156px] w-[249px]" source={elipse} />
      </View>
    </View>
  );
};

export default SecondViewForm;
