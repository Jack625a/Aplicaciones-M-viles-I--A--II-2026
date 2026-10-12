//IMPORTAR LAS DEPENDENCIAS
import {View,Text,Button,Alert,StyleSheet} from 'react-native';
import * as Location from 'expo-location';
import {useState} from 'react';
import MapView, {Marker,UrlTile} from 'react-native-maps';



export  default function Index(){
  //Funcion para obtener la ubicacion
  const obtenerUbicacion= async()=>{
    //Variables de estado
    const [latitud,setLatitud]=useState<number|null>(null);
    const [longitud,setLongitud]=useState<number|null>(null);
    const [ubicacion,setUbicacion]=useState({
      latitude:-17.969500,
      longitude:-67.114457,
      latitudeDelta:0.05,
      longitudeDelta:0.05
    });

    const obtenerUbicacion=async ()=>{
      try{
        //1. Pedir permisos
        const { status }= await Location.requestForegroundPermissionsAsync();
        if(status!=='granted'){
          alert("Permisos de ubicacion denegados");
          return;
        }
        //2. Guardar las cooordenas
        const ubicacion=await Location.getCurrentPositionAsync({});
        const lat=ubicacion.coords.latitude;
        const lon=ubicacion.coords.longitude;
        //3. Guardar las coordenadas en la variable de estado
        setLatitud(lat);
        setLongitud(lon);
        //4. Centrar el mapa a la nueva ubicacion
        setUbicacion({
          latitude:lat,
          longitude:lon,
          latitudeDelta:0.01,
          longitudeDelta:0.01
        });
        console.log("LATITUD: ",lat)
        console.log("LONGITUD: ",lon)
      }catch(error){
        Alert.alert("Error","No se pudo obtener su ubicacion!");
      }
    };


  return(
    <View style={styles.contenedor}>
      <Text>Mapas GPS</Text>
      <View style={styles.boton}>
        <Button
            title="Obtener Ubicacion"
            onPress={obtenerUbicacion}
        />
      </View>
      {latitud !==null && longitud!==null &&(
        <View style={styles.coordenadas}>
          <Text>Latitud: {latitud} </Text>
          <Text>Longitud: {longitud} </Text>
        </View>
      )}
      <MapView
        style={styles.mapa}
        region={ubicacion}
        mapType="standard"
      >
        <UrlTile
            urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            maximumZ={18}
        />
        {latitud!==null && longitud!==null &&(
          <Marker
              coordinate={{
                latitude:latitud,
                longitude:longitud
              }}
              title="Mi ubicacion"         
          />
        )
        }
      </MapView>

    </View>
  );
}
}

const styles=StyleSheet.create({
  contenedor:{
    flex:1,
    paddingTop:50,
  },
  boton:{
    padding:10,
    backgroundColor:'#13e02e',
  },
  coordenadas:{
    padding:10,
    backgroundColor:'#fcff3f',
    borderRadius:10,
    gap:5,
  },
  mapa:{
    flex:1,
    minHeight:300,
  }
})