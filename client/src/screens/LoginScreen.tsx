import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Boton from '../components/Boton';
import IngresaGoogle from '../components/IngresaGoogle';
import { useNavigation } from '@react-navigation/native';
import * as Yup from "yup";
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useAppDispatch } from '../app/hooks';
import { setLogin } from '../features/user/userSlice';
export default function LoginScreen() {
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const LoginSchemaA = Yup.object().shape({
    email: Yup.string()
      .email("Ingrese un email válido.")
      .required("El email es obligatorio"),
    password: Yup.string()
      .required("La contraseña es obligatoria")
      .min(6, "Debe contener al menos 6 caracteres")
  });

  return (

    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ flex: 1 }} >
      <View style={styles.container}>
        <Image source={require('../assets/img/LOGO.jpg')} />
        <Formik
          initialValues={{ email: '', password: "" }}
          onSubmit={values => dispatch(setLogin(values))}
          validationSchema={LoginSchemaA}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View className='gap-y-7   '>
              <View className=''>
                <View className='bg-[#FBFBFB] border-b-[#FFA800] border-b-2 px-4 py-2'>
                  <Text>Correo electronico</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                {errors.email && touched.email ? (
                  <Text style={{ color: "red" }}>{errors.email}</Text>
                ) : null}
              </View>
              <View className=''>
                <View className='bg-[#FBFBFB] border-b-[#FFA800] border-b-2 px-4 py-2'>
                  <Text>Contraseña</Text>
                  <TextInput
                    textContentType='password'
                    secureTextEntry
                    style={styles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                </View>
                {errors.password && touched.password ? (
                  <Text style={{ color: "red" }}>{errors.password}</Text>
                ) : null}
              </View>
              <View>
                <TouchableOpacity className='items-center p-1'>
                  <Text  >¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
              </View>
              <View className='w-max'>
                <Boton isDisable={false} text={"Ingresar"} action={handleSubmit} />
              </View>
            </View>
          )}
        </Formik>
        <View className='flex-row items-center gap-x-3'>
          <View className='bg-[#333] h-[1px] w-[40%]'></View>
          <Text className='text-xs'>o</Text>
          <View className='bg-[#333] h-[1px] w-[40%]'></View>
        </View>
        <View>
          <IngresaGoogle />
        </View>
        <View style={styles.footer}>
          <Text className='text-base font-normal'>No tenes una cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("register")}>
            <Text className='text-[#6750A4] text-base font-semibold italic ml-3'>Crear una</Text>
          </TouchableOpacity>
        </View>
      </View >
    </KeyboardAwareScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    rowGap: 10,
    paddingVertical: "5%"
  },
  input: {
    backgroundColor: '#FBFBFB',

    minWidth: '80%',
    padding: 5,


  },
  logo: {

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