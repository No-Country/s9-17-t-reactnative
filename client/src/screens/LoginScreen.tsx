import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Boton from '../components/Boton';
import IngresaGoogle from '../components/IngresaGoogle';
import { useNavigation } from '@react-navigation/native';



export default function LoginScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

      <Image source={require('../assets/img/LOGO.jpg')} />
      <View style={styles.logo} >

        <Text>Correo electronico</Text>
        <TextInput placeholder='abcdef@hhhh.com' style={styles.input} />
        <Text>Contraseña</Text>
        <TextInput placeholder='*************' style={styles.input} />
        <TextInput placeholder='¿Olvidaste tu contraseña?' style={styles.input2} />
        <Boton />
        <IngresaGoogle />

        <View style={styles.footer}>
          <Text>No tenes una cuenta?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("register") }>
            <Text>Crear una</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',


  },
  input: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#FFA800',

    paddingStart: 30,
    borderColor: 'gray',
    minWidth: '80%',
    margin: 10,
    padding: 5,


  },
  logo: {

    // textAlign: 'center',
  },
  logoText: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
  },
  input2: {
    textAlign: 'center',
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'



  }

});