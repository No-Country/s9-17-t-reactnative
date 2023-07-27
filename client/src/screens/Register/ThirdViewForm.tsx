import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import ImageCropPicker, { Image as ImagePickerResponse, Options } from "react-native-image-crop-picker";

// @ts-ignore
interface ThridViewFormProps {
    setView: React.Dispatch<React.SetStateAction<number>>
}
const ThirdViewForm: React.FC<ThridViewFormProps> = ({ setView }) => {
    const [imageFront, setImageFront] = useState('');
    const [imageBack, setImageBack] = useState('');
    const image = 'https://via.placeholder.com/200';


    const frontPhoto = () => {
        // Abre la cámara
        // ImageCropPicker.openPicker({
        //     title: "Tomar una foto",
        //     mediaType: "photo",
        //     quality: 0.8,
        // })
        //     .then((imagePath: string) => {
        //         // La foto se tomó con éxito
        //         console.log("La foto se tomó con éxito:", imagePath);
        //         setImageFront(imagePath);
        //     })
        //     .catch((error: any) => {
        //         // La foto no se pudo tomar
        //         console.log("La foto no se pudo tomar:", error);
        //     });
    };

    const backPhoto = () => {
        // Abre la cámara
        // ImageCropPicker.openPicker({
        //     title: "Tomar una foto",
        //     mediaType: "photo",
        //     quality: 0.8,
        // })
        //     .then((imagePath: string) => {
        //         // La foto se tomó con éxito
        //         console.log("La foto se tomó con éxito:", imagePath);
        //         setImageFront(imagePath);
        //     })
        //     .catch((error: any) => {
        //         // La foto no se pudo tomar
        //         console.log("La foto no se pudo tomar:", error);
        //     });
    };

    return (

        <View className='w-full h-full pt-2 pb-[50px] items-center justify-start bg-slate-500'>
            <Text className="text-base mx-8 mt-2">Por favor, escanea el frente y el dorso de tu documento de identidad para validar el registro </Text>
            {
                imageFront !== '' ?
                    <TouchableOpacity
                        className="mt-4"
                        // onPress={frontPhoto}
                    >
                        <Image
                            className="w-[200px] h-[200px] self-center"
                            source={{ uri: image }}
                        />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        className="mt-4"
                        // onPress={backPhoto}
                    >
                        <Image
                            className="w-[200px] h-[200px] self-center"
                            source={{ uri: image }}
                        />
                    </TouchableOpacity>
            }

            {imageBack !== '' ?
                <View className="">
                    <TouchableOpacity className="w-[328px] h-[72px] mt-10 bg-[#FFA800] justify-center items-center rounded-full"

                    >
                        <Text className="text-lg">Finalizar</Text>
                    </TouchableOpacity>
                </View> : <></>
            }

        </View>

    );

}


export default ThirdViewForm;