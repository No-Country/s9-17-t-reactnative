import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Boton() {
  return (
    <TouchableOpacity
        style = {
            styles.button
        }
        >
      <Text style={{textAlign:'center'}} >Ingresar</Text>

      

      
    </TouchableOpacity>
    



  )
}

const styles = StyleSheet.create({
button:{
alignSelf:'center',
borderRadius:15,
backgroundColor:'#FFA800',
paddingVertical:10,
minWidth:'80%',
}

})


