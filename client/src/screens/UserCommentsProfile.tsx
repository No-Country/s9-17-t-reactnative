import { View, TouchableOpacity, Text, Image } from 'react-native'
import React from 'react';
import profimeImg from '../assets/imgTest/profile1.jpg';
import chat from '../assets/icons/Chat-img.png';
import { UserInfo } from './UserInfo';
import { useNavigation } from '@react-navigation/native';
import pruebaComments from '../pruebaComments.js';
import star from '../assets/icons/Star.png';

const MyProfile = () => {

    const navigate = useNavigation();

    const scoreUser = (score: number) => {
        const stars = [];
        for (let i = 0; i < score; i++) stars.push(<Image key={i} source={star} />);
        return stars;
    }

    return (
        <View className="w-full h-full m-0 flex justify-center items-center">
            <UserInfo imgSrc={profimeImg} nameUser={"Julian Taboga"} />
            <View className="mt-10">
                {
                    pruebaComments.map((item, key) => {
                        return (
                            <View className="flex w-11/12 h-24 justify-center items-center border-y-2 border-y-gray-300" key={key.id}>
                                <View className="flex flex-row justify-between items-center w-10/12" >
                                    <Image className="h-16 w-16 rounded-full" src={item.img} />
                                    <Text className="text-sm font-semibold">{item.name}</Text>
                                    <View className="flex flex-row">
                                        {scoreUser(item.score)}
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