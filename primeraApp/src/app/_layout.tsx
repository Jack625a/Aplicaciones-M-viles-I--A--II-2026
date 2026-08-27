import {Tabs } from 'expo-router'; //PARA LA NAVEGACION
import {Ionicons} from '@expo/vector-icons'; //iconos


export default function TabLayout() {
  return(
    <Tabs
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:"#24f04d",
        tabBarInactiveTintColor:"#213eff",
        tabBarStyle:{
          height:70,
          paddingBottom:10,
          paddingTop:5,
        },
      }}
    >
      <Tabs.Screen 
          name="index"
          options={{
            title:"Inicio",
            tabBarIcon:({
              color,size
            })=>(
              <Ionicons 
              name="diamond-outline" 
              size={size} 
              color={color} />
            ),
          }}
      />
      <Tabs.Screen 
          name="explore"
          options={{
            title:"Productos",
            tabBarIcon:({
              color,size
            })=>(
              <Ionicons 
              name="storefront-outline" 
              size={size} 
              color={color} />
            ),
          }}
      />
      <Tabs.Screen 
          name="perfil"
          options={{
            title:"Perfil",
            tabBarIcon:({
              color,size
            })=>(
              <Ionicons 
              name="person-outline" 
              size={size} 
              color={color} />
            ),
          }}
      />
      <Tabs.Screen 
          name="ajustes"
          options={{
            title:"Ajustes",
            tabBarIcon:({
              color,size
            })=>(
              <Ionicons 
              name="settings-outline" 
              size={size} 
              color={color} />
            ),
          }}
      />
      <Tabs.Screen 
          name="notificacion"
          options={{
            title:"Notificaciones",
            tabBarIcon:({
              color,size
            })=>(
              <Ionicons 
              name="bonfire-outline" 
              size={size} 
              color={color} />
            ),
          }}
      />
      <Tabs.Screen 
          name="servicios"
          options={{
            title:"Servicios",
            tabBarIcon:({
              color,size
            })=>(
              <Ionicons 
              name="happy-outline" 
              size={size} 
              color={color} />
            ),
          }}
      />
      

    </Tabs>
  );
  
}
