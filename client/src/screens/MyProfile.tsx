import { View, TouchableOpacity, Text, Image, Modal, ScrollView } from "react-native";
import React, { useState } from "react";
import profimeImg from "../assets/imgTest/profile1.jpg";
import chat from "../assets/icons/Chat-img.png";
import mail from "../assets/icons/Mail.png";
import dni from "../assets/icons/IdentificationCard.png";
import pointsmenu from "../assets/icons/dots.png";
import car from "../assets/icons/Car.png";
import edit from "../assets/icons/Edit.png";
import trash from "../assets/icons/Trash.png";
import { UserInfo } from "../components/UserInfo";
import commentsUser  from "./pruebaComments";


const MyProfile = ({ navigation: { navigate } }) => {

  const nameUser: string = "Julian";
  const lastNameUser: string = "Taboga";
  const typeDocUser: string = "DNI"
  const documentUser: string = "123456789";
  const emailUser: string = "Julian Taboga";

  const dataInfo = {
    name: nameUser,
    lastName: lastNameUser,
    typeDoc: typeDocUser,
    document: documentUser,
    email: emailUser,
  }

  const [modalVisible, setModalVisible] = useState(false);

  const editarPerfil = () =>{
    navigate('editProfile', {dataUser: {dataInfo}})
    setModalVisible(!modalVisible)
  }
  return (
    <View className="flex-1 justify-start items-center w-full bg-[#fff]">
      <View className="flex w-full">
        <UserInfo imgSrc={profimeImg} nameUser={nameUser + lastNameUser}/>
        <TouchableOpacity
          className="sticky z-50 top-[-200px] right-[-346px]"
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Image className="h-8 w-2" source={pointsmenu} />
        </TouchableOpacity>
        <TouchableOpacity
          className="font-sm font-semibold text-sm flex items-center"
          onPress={() => navigate.navigate("myprofile-comments")}
        >
          <Text>Ver calificaciones</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View className="h-20 w-11/12 flex justify-center items-center border-t-2 border-y-gray-300 ">
          <Text className="text-sm ">
            Edita tu perfil para hacer tu descriptión
          </Text>
        </View>
        <View className="h-20 w-11/12 flex flex-row justify-start items-center border-t-2 border-y-gray-300 ">
          <Image className="mr-3" source={mail} />
          <Text className="text-sm">{emailUser}</Text>
        </View>
        <View className="h-20 w-11/12 flex flex-row justify-start items-center border-t-2 border-y-gray-300 ">
          <Image className="mr-3" source={dni} />
          <Text className="text-base">{typeDocUser + documentUser}</Text>
        </View>
        <View className="h-20 w-11/12 flex flex-row justify-start items-center border-y-2 border-y-gray-300 ">
          <TouchableOpacity >
            <View className="flex flex-row">
              <Image className="mr-3" source={chat} />
              <Text className="text-sm font-semibold">Contactar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* Modal */}
      <View>
        <Modal
          className="h-[200px] w-full  bottom-0 "
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View className="absolute bottom-2 flex justify-center px-[22px] right-[60px] h-[169px] w-[264px]  rounded-lg bg-[#fff]">
            <View>
              <TouchableOpacity
                className="flex flex-row items-center h-[51px]"
                onPress={() => editarPerfil()}
              >
                <Image className="h-[22px] w-[24px]" source={edit} />
                <Text className="text-base pl-2"> Editar perfil</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex flex-row items-center h-[51px] border-y-2 border-y-gray-300"
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Image className="h-[22px] w-[24px]" source={car} />
                <Text className="text-base pl-2"> Vehículos registrados</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex flex-row items-center h-[51px]"
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Image className="h-[22px] w-[24px]" source={trash} />
                <Text className="text-base pl-2"> Eliminar cuenta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default MyProfile;
