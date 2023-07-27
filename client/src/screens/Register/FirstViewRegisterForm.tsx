import React, { useState } from "react";
import { View, TouchableOpacity, Text, SafeAreaView, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FirstViewFormProps {
    setView: React.Dispatch<React.SetStateAction<number>>;
}

const FirstViewForm: React.FC<FirstViewFormProps> = ({ setView }) => {

    const [userDataInfo, setUserDataInfo] = useState({
        nombre: '',
        apellido: '',
        tipoDocumento: '',
        numeroDNI: '',
    })

    const storeData = async (data: {}) => {
        if (userDataInfo.nombre !== '' && userDataInfo.apellido !== '' && userDataInfo.tipoDocumento !== '' && userDataInfo.numeroDNI !== '') {
            try {
                await AsyncStorage.setItem('firstData', JSON.stringify(data));
                console.log(JSON.stringify(data));
                setView(2)
            } catch (error) {
                console.error('Error al guardar', error);
            }
        } else {
            return (
                Alert.alert(
                    'Faltan datos para seguir',
                    'Debes diligenciar todos los datos',
                    [
                        {
                            text: 'OK',
                            onPress: () => {
                                console.log('')
                            },
                        },
                    ],
                )
            )
        }
    };
    const handlUserData = (key: string, value: string) => {
        setUserDataInfo((prevUserData) => ({
            ...prevUserData,
            [key]: value,
        }));
    };

    return (
        <View className={`flex mt-[8px] justify-start items-center w-full h-full`}>
            <SafeAreaView className={`flex items-start w-11/12 `}>
                <View className="w-[360px] h-[128px] justify-center items-center rounded-lg shadow shadow-slate-300">
                    <TextInput
                        className="w-[310px] h-[32px] my-[10px]  border-b-2 border-[#FFA800] bg-[#fff]"
                        onChangeText={(text: string) => handlUserData('nombre', text)}
                        value={userDataInfo.nombre}
                        placeholder="Nombre"
                    />
                    <TextInput
                        className="w-[310px] h-[32px] my-[10px] border-b-2 border-[#FFA800] bg-[#fff]"
                        onChangeText={(text: string) => handlUserData('apellido', text)}
                        value={userDataInfo.apellido}
                        placeholder="Apellido"
                    />
                </View>
                <View className=" mt-[16px] w-[360px] h-[128px] justify-around items-center rounded-lg shadow shadow-slate-300">
                    {<View className=" w-[310px] h-[38px] my-[10px] border-b-2 border-[#FFA800]">
                        <Picker
                            selectedValue={userDataInfo.tipoDocumento}
                            onValueChange={(itemValue: string) => handlUserData('tipoDocumento', itemValue)}
                        >
                            <Picker.Item label="Seleccione el tipo de documento" value="" />
                            <Picker.Item label="DNI" value="DNI" />
                            <Picker.Item label="CC" value="CC" />
                            <Picker.Item label="TI" value="TI" />
                        </Picker>
                    </View>}
                    <TextInput
                        className="w-[310px] h-[32px] my-[10px] border-b-2 border-[#FFA800] bg-[#fff]"
                        onChangeText={(text: string) => handlUserData('numeroDNI', text)}
                        value={userDataInfo.numeroDNI}
                        placeholder="Número de identificación"
                        keyboardType="number-pad"
                    />
                </View>
            </SafeAreaView>
            <View className="mt-[60px]">
                <TouchableOpacity className="w-[328px] h-[72px] bg-[#FFA800] justify-center items-center rounded-full"
                    onPress={() => storeData(userDataInfo)}>
                    <Text className="text-lg">Siguiente</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};

export default FirstViewForm;
