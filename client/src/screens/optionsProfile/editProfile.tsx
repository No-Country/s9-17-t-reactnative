import { View, TouchableOpacity, Text, TextInput, Modal, ScrollView, SafeAreaView } from "react-native";
import React, { useState } from "react";
import profimeImg from "../../assets/imgTest/profile1.jpg";
import chat from "../../assets/icons/Chat-img.png";
import mail from "../../assets/icons/Mail.png";
import dni from "../../assets/icons/IdentificationCard.png";
import pointsmenu from "../../assets/icons/dots.png";
import car from "../../assets/icons/Car.png";
import edit from "../../assets/icons/Edit.png";
import trash from "../../assets/icons/Trash.png";
import { UserInfo } from "../../components/UserInfo";
import { useNavigation } from "@react-navigation/native";
import ArrowBackComponent from "../../components/ArrowBackComponent";


const MyProfile = ({ ...dataUser }) => {

    const navigate = useNavigation();
    const [dataUserChange, setDataUserChange] = useState({
        name: dataUser.nameUser,
        lastName: dataUser.lastNameUser,
        email: dataUser.emailUser,
        description: ''
    });

    const handlUserData = (key: string, value: string) => {
        setDataUserChange((prevUserData) => ({
            ...prevUserData,
            [key]: value,
        }));
    };

    const saveInfo = () => {

    }

    return (
        <View className="flex-1 justify-center items-center bg-[#fff]">
            <View className="flex w-full">
                <ArrowBackComponent/>
                <UserInfo imgSrc={profimeImg} nameUser={dataUserChange.nombre}/>
                <TouchableOpacity
                    className="font-sm font-semibold text-sm flex items-center"
                    onPress={() => navigate.navigate("myprofile-comments")}
                >
                    <Text>Ver calificaciones</Text>
                </TouchableOpacity>
            </View>
            <ScrollView >
            <SafeAreaView className={`flex items-start w-full `}>
                <View className="h-20 w-11/12 flex justify-center items-center border-t-2 border-y-gray-300 ">
                    <TextInput className="text-sm " onChangeText={(text: string) => handlUserData('nombre', text)}
                        value={dataUserChange.nombre}
                        placeholder="Nombre" />
                </View>
                <View className="h-20 w-11/12 flex justify-center items-center border-t-2 border-y-gray-300 ">
                    <TextInput className="text-sm " onChangeText={(text: string) => handlUserData('apellido', text)}
                        value={dataUserChange.lastName}
                        placeholder="apellido" />
                </View>
                <View className="h-20 w-11/12 flex justify-center items-center border-t-2 border-y-gray-300 ">
                    <TextInput className="text-sm " onChangeText={(text: string) => handlUserData('email', text)}
                        value={dataUserChange.email}
                        placeholder="email" />
                </View>
                <View className="h-20 w-11/12 flex justify-center items-center border-t-2 border-y-gray-300 ">
                    <TextInput className="text-sm " onChangeText={(text: string) => handlUserData('description', text)}
                        value={dataUserChange.email}
                        placeholder="description" />
                </View> 
            </SafeAreaView>
            <View className="my-[10px]">
                <TouchableOpacity className="w-[328px] h-[72px] bg-[#FFA800] justify-center items-center rounded-full"
                    onPress={() => navigate.navigate('myprofile')}>
                    <Text className="text-lg">Guardar</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View >
    );
};

export default MyProfile;
