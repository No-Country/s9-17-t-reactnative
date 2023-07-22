import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { login } from '../features/user/userSlice'
import { useAppDispatch } from '../app/hooks'

export default function Boton() {
  const dispatch = useAppDispatch()
  return (
    <TouchableOpacity
      style={
        styles.button
      }
      onPress={() => dispatch(login(1))}
    >
      <Text style={{ textAlign: 'center' }} >Ingresar</Text>




    </TouchableOpacity>




  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#FFA800',
    paddingVertical: 10,
    minWidth: '80%',
  }

})


