import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { useState } from 'react';
import * as Location from 'expo-location';
import MapView, { Marker, UrlTile } from 'react-native-maps';

export default function Index() {
  // Variables para guardar las coordenadas GPS
  const [latitud, setLatitud] = useState<number | null>(null);
  const [longitud, setLongitud] = useState<number | null>(null);

  // Ubicación inicial: Oruro, Bolivia
  const [ubicacion, setUbicacion] = useState({
    latitude: -17.969500,
    longitude: -67.114457,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  // Función para obtener la ubicación GPS
  const obtenerUbicacion = async () => {
    try {
      const { status } =
        await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Permiso denegado',
          'Debes permitir el acceso a la ubicación.'
        );
        return;
      }

      const posicion = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      const lat = posicion.coords.latitude;
      const lon = posicion.coords.longitude;

      setLatitud(lat);
      setLongitud(lon);

      // Centrar el mapa en la ubicación actual
      setUbicacion({
        latitude: lat,
        longitude: lon,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      console.log('LATITUD:', lat);
      console.log('LONGITUD:', lon);
    } catch (error) {
      Alert.alert('Error', 'No se pudo obtener la ubicación GPS.');
      console.log(error);
    }
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Mapa GPS con OpenStreetMap</Text>

      <View style={styles.boton}>
        <Button
          title="Obtener ubicación"
          onPress={obtenerUbicacion}
        />
      </View>

      {latitud !== null && longitud !== null && (
        <View style={styles.coordenadas}>
          <Text>Latitud: {latitud.toFixed(6)}</Text>
          <Text>Longitud: {longitud.toFixed(6)}</Text>
        </View>
      )}

      <MapView
        style={styles.mapa}
        region={ubicacion}
        mapType="none"
        loadingEnabled={true}
        onMapReady={() => console.log('Mapa preparado')}
      >
        <UrlTile
          urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
          tileSize={256}
          zIndex={1}
        />

        {latitud !== null && longitud !== null && (
          <Marker
            coordinate={{
              latitude: latitud,
              longitude: longitud,
            }}
            title="Mi ubicación"
            description="Ubicación GPS actual"
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#FFFFFF',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  boton: {
    padding: 10,
  },
  coordenadas: {
    padding: 10,
    backgroundColor: '#FCFF3F',
    borderRadius: 10,
    gap: 5,
  },
  mapa: {
    flex: 1,
    minHeight: 300,
  },
});