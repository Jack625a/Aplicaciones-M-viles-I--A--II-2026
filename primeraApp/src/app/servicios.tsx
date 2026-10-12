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
      nombre:"Ana Perez",
      carrera:"Ingenieria de Sistemas",
      imagen:"https://img.magnific.com/foto-gratis/groupo-cuatro-amigos-adolescentes-pasando-rato-escuela-secundaria_662251-1992.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      codEstudiante:"4",
      nombre:"Jose Gomez",
      carrera:"Derecho",
      imagen:"https://www.aauniv.com/s/blog/wp-content/uploads/2020/04/estudiar-online-en-casa-para-universitarios.jpg"
    }
  ];


  return(
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Estudiantes</Text>
      <FlatList
        data={estudiante}
        numColumns={2}
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
              onPress={()=>alert(item.nombre)}
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
    padding:15
  },
  titulo:{
    fontSize:30,
    color:"#002155"
  },
  card:{
    margin:15,
    flex:1
  }
})