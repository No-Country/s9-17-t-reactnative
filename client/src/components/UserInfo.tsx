import React from "react";
import { View, Text, Image } from "react-native";
import starRating from "./starRating";
import { LinearGradient } from 'expo-linear-gradient';
import commentsUser from "../screens/pruebaComments";

interface UserInfoProps {
  imgSrc: any;
  nameUser: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({
  imgSrc,
  nameUser
}) => {
  
  const totalScore = commentsUser.reduce((sum, user) => sum + user.score, 0);
  const averageScore = Math.floor(totalScore / commentsUser.length);

  return (
    <View className="w-full ">
      <LinearGradient colors={['#FFA800', '#FAFAFA']}>
        <View className="w-full h-[150px] flex justify-end items-center ">
          <Image className="h-32 w-32 rounded-full " source={imgSrc} />
        </View>
      </LinearGradient>
      <View className="flex items-center">
        <Text className="text-base font-semibold mt-4 mb-3">{nameUser}</Text>
      </View>
      <View className="flex justify-center items-center">
        <View className="flex flex-row">{starRating(averageScore)}</View>
      </View>
    </View>
  );
};
