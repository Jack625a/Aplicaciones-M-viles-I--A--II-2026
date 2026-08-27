import {View, Text,StyleSheet,
  TouchableOpacity
} from 'react-native';

import {Ionicons} from '@expo/vector-icons';

import {Button} from 'react-native-paper';

export default function Perfil(){
  const click=()=>{
    alert("Se hizo Click");
    console.log("Se hizo click")
  };

  return(
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Pantalla Perfil</Text>
      
      <Button
        icon="home"
      >
        Prueba boton
      </Button>
    
      <TouchableOpacity
        style={styles.boton}
        onPress={click}
      >
            <Ionicons 
          name="fitness"
          size={22}
          color="#ffffff"
        />
        <Text style={styles.textobtn}>Boton Personalizable</Text>
      </TouchableOpacity>
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
  boton:{
    backgroundColor:"#6405c2",
    padding:10,
    borderRadius:50,
    flexDirection:"row",
    gap:10,
    alignItems:"center",
    marginTop:15
  },
  textobtn:{
    fontSize:18,
    color:"#fff",
    fontWeight:"bold"
  }

})