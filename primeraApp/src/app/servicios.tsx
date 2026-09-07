import {View, StyleSheet,FlatList} from 'react-native';
import {Card, Text, Button} from 'react-native-paper';

export default function Servicios(){
  const estudiante=[
    {
      codEstudiante:"1",
      nombre:"Kevin Arroyo",
      carrera:"Ingenieria de Sistemas",
      imagen:"https://www.ecured.cu/images/a/a9/Logo_Udabol.gif"
    },
    {
      codEstudiante:"2",
      nombre:"Juan Perez",
      carrera:"Ingenieria de Sistemas",
      imagen:"https://pxcdn.eldeber.com.bo/eldeber/122025/1764958519929/WhatsApp%20Image%202025-12-05%20at%2014.03.56.jpeg"
    },
    {
      codEstudiante:"3",
      nombre:"Kevin Arroyo",
      carrera:"Ingenieria de Sistemas",
      imagen:"https://www.ecured.cu/images/a/a9/Logo_Udabol.gif"
    },
    {
      codEstudiante:"4",
      nombre:"Juan Perez",
      carrera:"Ingenieria de Sistemas",
      imagen:"https://pxcdn.eldeber.com.bo/eldeber/122025/1764958519929/WhatsApp%20Image%202025-12-05%20at%2014.03.56.jpeg"
    }
  ];


  return(
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Estudiantes</Text>
      <FlatList
        data={estudiante}
        keyExtractor={(item)=>item.codEstudiante}
        renderItem={({item})=>(
          <Card style={styles.card}>
            <Card.Title
              title={item.carrera}
            />
            <Card.Cover
              source={{uri:item.imagen}}
            />
          <Card.Content>
            <Text>Nombre: {item.nombre} </Text>
          </Card.Content>
          <Card.Actions>
            <Button
              mode="contained"
            >
              Ver Información
            </Button>
          </Card.Actions>
          </Card>
        )}
      
      />

    
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
  card:{
    margin:15,
  }
})