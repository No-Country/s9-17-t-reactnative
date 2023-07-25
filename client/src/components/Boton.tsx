import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Boton({ action, text, isDisable }:{ action:any, text: string, isDisable?:boolean }) {
  return (
    <TouchableOpacity
      className={`${isDisable && "opacity-50"}`}
      style={styles.button}
      onPress={action}
      disabled={isDisable}
    >
      <Text style={{ textAlign: 'center', fontWeight: "500", fontSize: 16, }} >{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#FFA800',
    paddingVertical: 10,
    width: "100%",
  }

})


