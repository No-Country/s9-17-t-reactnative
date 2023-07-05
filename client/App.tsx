import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';


export default function App() {
  return (
    <View className={`items-center justify-center flex-1 bg-red-500`}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar  />
    </View>
  );
}


