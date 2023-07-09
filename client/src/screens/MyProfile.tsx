import { View, TouchableOpacity, Text, Image } from 'react-native'
import React from 'react';
import profimeImg from '../assets/imgTest/profile1.jpg';
import chat from '../assets/icons/Chat-img.png';
import { UserInfo } from './UserInfo';
import { useNavigation } from '@react-navigation/native';

const MyProfile = () => {

    const navigate = useNavigation();
    const name: string = "Julian Taboga";

    return (
        <View className="w-full h-full m-0 flex justify-center items-center">
            <UserInfo imgSrc={profimeImg} nameUser={name} />
            <TouchableOpacity className="font-sm font-semibold text-sm my-4" onPress={() => navigate.navigate('myprofile-comments')}>
                <Text>Ver calificaciones</Text>
            </TouchableOpacity>
            <View className="h-20 w-11/12 flex justify-center items-center border-t-2 border-y-gray-300 ">
                <Text className="text-sm ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic expedita aspernatur maxime natus sunt dicta dignissimos
                </Text>
            </View>
            <View className="h-20 w-11/12 flex justify-center items-center border-t-2 border-y-gray-300 ">
                <Text className="text-sm">juliantaboga@gmail.com
                </Text>
            </View>
            <View className="h-20 w-11/12 flex justify-center items-center border-t-2 border-y-gray-300 ">
                <Text className="text-base">DNI 123456789
                </Text>
            </View>
            <View className="h-20 w-11/12 flex justify-center items-center border-y-2 border-y-gray-300 ">
                <TouchableOpacity onPress={() => navigation.navigate('contact')}>
                    <View className="flex flex-row">
                        <Image source={chat} />
                        <Text className="text-sm font-semibold ml-2">Contactar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyProfile;