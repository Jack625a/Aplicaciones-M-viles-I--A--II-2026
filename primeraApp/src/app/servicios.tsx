import {View, Text,StyleSheet} from 'react-native';

export default function Servicios(){
  return(
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Pantalla Servicios</Text>
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