import React from 'react'
import { View, Text, Image } from 'react-native'
import star from '../assets/icons/Star.png';

interface UserInfoProps {
    imgSrc: any;
    nameUser: string;
}


export const UserInfo: React.FC<UserInfoProps> = ({ imgSrc, nameUser }) => {
    return (
        <View>
            <View className="flex items-center">
                <Image className="h-32 w-32 rounded-full" source={imgSrc} />
                <Text className="text-base font-semibold mt-4 mb-3">
                    {nameUser}
                </Text>
            </View >
            <View className="flex justify-center items-center">
                <View className="flex flex-row">
                    <Image source={star} />
                    <Image source={star} />
                    <Image source={star} />
                    <Image source={star} />
                    <Image source={star} />
                </View>
            </View>
        </View>
    )
}
