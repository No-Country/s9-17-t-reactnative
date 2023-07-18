import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Boton() {
  return (
    <TouchableOpacity
        style = {
            styles.button
        }
        >
      <Text style={{textAlign:'center'}} >Ingresar con Google</Text>

      

      
    </TouchableOpacity>
    



  )
}

const styles = StyleSheet.create({
button:{
marginTop:20,
alignSelf:'center',
borderRadius:15,
backgroundColor:'#f1f1f1',
paddingVertical:10,
minWidth:'80%',
marginBottom:20,
}

})


