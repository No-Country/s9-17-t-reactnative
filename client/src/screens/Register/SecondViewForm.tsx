import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as faceapi from 'face-api.js';
import { Camera, CameraType } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';

interface SecondViewFormProps {
    setView: React.Dispatch<React.SetStateAction<number>>;
}
const SecondViewForm: React.FC<SecondViewFormProps> = ({ setView }) => {

    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [type, setType] = useState(CameraType.front);
    const [biometricData, setBiometricData] = useState(null)
    
    const getData = async () => {
        try {
            const data1String = await AsyncStorage.getItem('firstData');
            if (data1String !== null) {
                JSON.parse(data1String);
            } else {
                console.log('No data found');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const dataUserInfo= getData();
    console.log(dataUserInfo);

    const handleFacesDetected = ({ faces }) => {
        const biometricDataRecognitionResult = JSON.stringify(faces);
        console.log('Biometric Data Recognition Result:', biometricDataRecognitionResult);
        if (faces !== null) {
            setBiometricData(biometricDataRecognitionResult);
            setView(3)
        } else {
            console.log('No faces detected.');
        }
        console.log('Esto es lo que detecta:', biometricDataRecognitionResult);
    };

    if (biometricData != null) {
        const mergeData = async () => {
            try {
                await AsyncStorage.setItem('biometricData', JSON.stringify(biometricData));
                console.log('dato' + JSON.stringify(biometricData));
                await AsyncStorage.mergeItem('dataUser', JSON.stringify(dataUserInfo));
                const data= await AsyncStorage.getItem('dataUser');
                console.log('dato1' + JSON.stringify(data));
            } catch (error) {
                console.error('Error al guardar', error);
            }
        };
    }


    return (

        <View className='w-full h-full pt-2 pb-[50px] items-center justify-start bg-slate-500'>
            <Text className="text-base mx-8 mt-2">Por favor, escanea tu rostro para validar tu identidad</Text>
            <View className='bg-black my-8'>
                <Camera
                    className='h-[220px] w-[220px] rounded-2xl'
                    type={type}
                    onFacesDetected={handleFacesDetected}
                    faceDetectorSettings={{
                        mode: FaceDetector.FaceDetectorMode.fast,
                        detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
                        runClassifications: FaceDetector.FaceDetectorClassifications.none,
                        minDetectionInterval: 100,
                        tracking: true,
                    }}
                />
            </View>
            <View className="">
                <TouchableOpacity className="w-[328px] h-[72px] bg-[#FFA800] justify-center items-center rounded-full"
                    onPress={() => setView(3)}
                >
                    <Text className="text-lg">Siguiente</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

export default SecondViewForm;