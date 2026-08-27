import {View, Text,StyleSheet,Image} from 'react-native';

export default function Index(){
  return(
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Pantalla Inicio</Text>
      <Image 
      source={{uri:"https://somospnt.com/images/blog/cover/componentes-react.png"}} 
      style={styles.imagen}
      />
      <Text>Prueba</Text>
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
  },
  imagen:{
    width:200,
    height:180
  }
})