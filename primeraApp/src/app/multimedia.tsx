// Importación de dependencias
import { useState } from "react";
import {
    View,
    Button,
    Image,
    Alert
} from "react-native";

import * as ImagePicker from "expo-image-picker";


// Función principal
export default function Multimedia() {

    // Variable para guardar la imagen
    const [imagen, setImagen] = useState("");


    // Seleccionar imagen
    const seleccionarImagen = async () => {

        // Abrir galería
        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
        });


        // Verificar si seleccionó una imagen
        if (!resultado.canceled) {

            const url = resultado.assets[0].uri;

            // Mostrar imagen seleccionada
            setImagen(url);


            // Crear formulario
            const datos = new FormData();


            // Agregar imagen
            datos.append("file", {
                uri: url,
                type: "image/jpeg",
                name: "imagen.jpg",
            } as any);


            // Upload Preset UNSIGNED
            datos.append(
                "upload_preset",
                "aplicacionesMovilesA"
            );


            // Subir imagen a Cloudinary
            const respuesta = await fetch(
                "https://api.cloudinary.com/v1_1/dw0d6ieuf/image/upload",
                {
                    method: "POST",
                    body: datos,
                }
            );


            // Obtener respuesta
            const resultadoCloudinary = await respuesta.json();


            // Mostrar resultado en consola
            console.log(resultadoCloudinary);


            // Verificar si se subió correctamente
            if (resultadoCloudinary.secure_url) {

                console.log(
                    "Imagen subida:",
                    resultadoCloudinary.secure_url
                );

                // Mostrar la imagen de Cloudinary
                setImagen(
                    resultadoCloudinary.secure_url
                );

                Alert.alert(
                    "Éxito",
                    "Imagen subida correctamente"
                );

            } else {

                console.log(
                    "Error:",
                    resultadoCloudinary.error
                );

                Alert.alert(
                    "Error",
                    resultadoCloudinary.error?.message ||
                    "No se pudo subir la imagen"
                );
            }
        }
    };


    // Interfaz
    return (

        <View
            style={{
                padding: 30,
                marginTop: 50
            }}
        >

            <Button
                title="Seleccionar Imagen"
                onPress={seleccionarImagen}
            />


            {imagen !== "" && (

                <Image
                    source={{
                        uri: imagen
                    }}

                    style={{
                        width: 300,
                        height: 300,
                        marginTop: 20
                    }}
                />

            )}

        </View>
    );
}