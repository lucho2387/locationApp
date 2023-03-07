import * as ImagePicker from "expo-image-picker";

import { Alert, Button, Image, Text, View } from "react-native";

import colors from "../../utils/colors";
import { styles } from "./styles";
import { useState } from "react";

// import * as Permissions from "expo-permissions";







const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState(null);
//   Verificamos si tenemos permisos para usar la camara
  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permisos insuficientes", "Necesitas dar permisos para usar la cámara.", [
        { text: "Ok" },
      ]);
      return false;
    }
    return true;
  };

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const image = await ImagePicker.launchCameraAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    // Edicion de la imagen
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    // url de la imagen
    setPickedUrl(image.uri);
    onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text style={styles.text}>No hay imagen seleccionada.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="Seleccionar imagen" color={colors.color1} onPress={onHandleTakeImage} />
    </View>
  );
};

export default ImageSelector;