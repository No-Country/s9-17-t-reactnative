import { View, TouchableOpacity, Text, Image } from 'react-native'
import React from 'react';
import profimeImg from '../assets/imgTest/profile1.jpg';
import chat from '../assets/icons/Chat-img.png';
import { UserInfo } from '../components/UserInfo';
import { useNavigation } from '@react-navigation/native';
import pruebaComments from '../pruebaComments.js';
import starRating from '../components/starRating';

const MyProfile = () => {

    const navigate = useNavigation();

    return (
        <View className="w-full h-full m-0 flex justify-start items-center bg-[#fff]">
            <UserInfo imgSrc={profimeImg} nameUser={"Julian Taboga"} score={3} />
            <View className="mt-10">
                {
                    pruebaComments.map((item, key) => {
                        return (
                            <View className="flex w-[380px] h-24 justify-center items-center border-b-2 border-y-gray-300" key={key.id}>
                                <View className="flex flex-row justify-around items-center w-full pl-2" >
                                    <Image className="h-16 w-16 rounded-full" src={item.img} />
                                    <Text className="text-sm font-semibold">{item.name}</Text>
                                    <View className="flex flex-row">
                                        {starRating(item.score)}
                                    </View>
                                </View>
                                <View>
                                    <Text className="text-base text-gray-500">{item.comment}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default MyProfile;