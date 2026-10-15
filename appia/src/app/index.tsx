import { View, Button, Alert} from 'react-native';

export default function Index(){
  async function enviarNotificacion(){
    const token= 'ExponentPushToken[token]';

    const respuesta= await fetch(
      'https://exp.host/--/api/v2/push/send',
      {
        method:"POST",
        headers:{
          "Content-Type":'application/json',
        },
        body: JSON.stringify({
          to:token,
          title:'Notificacion',
          body:"Esta es una prueba de notificacion push",
          sound:'default'
        }),
      }
    );
    const datos=await respuesta.json();
    Alert.alert("Respuesta de expo",JSON.stringify(datos));
  }
  return(
    <View style={{alignItems:"center",justifyContent:'center',flex:1}}>
       <Button
          title="Enviar Notificacion"
          onPress={enviarNotificacion}
       />
    </View>
  )
}