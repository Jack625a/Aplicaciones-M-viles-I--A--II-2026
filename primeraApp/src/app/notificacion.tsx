import {View, Text,StyleSheet} from 'react-native';
import {useState} from 'react';

import {Button, Snackbar} from 'react-native-paper';


export default function Notificacion(){
  const [visible,setVisible]=useState(false);


  return(
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Pantalla Notificacion</Text>
      <Button
        mode="contained"
        icon="home"
        onPress={()=>setVisible(true)}
      >
        Prueba Boton
      </Button>
      <Snackbar
          visible={visible}
          duration={3000}
          onDismiss={()=>setVisible(false)}
      >
        Uso de snackBar - notificacion inferior
      </Snackbar>
    </View>
  )
}

const styles=StyleSheet.create({
  contenedor:{
    flex:1,
    backgroundColor:"#fafafa",
    justifyContent:"center",
    alignItems:"center"
  },
  titulo:{
    fontSize:30,
    color:"#002155"
  }
})