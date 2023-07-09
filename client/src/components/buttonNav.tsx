import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ButtonNav = ({ imageSource, route }) => {


    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={()=> navigation.navigate({route})}>
            <View>
                <Image source={imageSource} />
            </View>
        </TouchableOpacity>
    );
};

export default ButtonNav;
