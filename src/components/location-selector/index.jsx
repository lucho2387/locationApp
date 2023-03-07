import * as Location from "expo-location";

import { Alert, Button, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import colors from "../../utils/colors";
import { styles } from "./styles";

// import MapPreview from "../map-preview/index";


const LocationSelector = ({ onLocation, navigation }) => {
//   const navigation = useNavigation();
//   const route = useRoute();

//   const { mapLocation } = route.params || {};

  const [pickedLocation, setPickedLocation] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("No hay permisos para acceder a la ubicacion", [{ text: "Ok" }]);
      return false;
    }
    return true;
  };
  const onHandleGetLocation = async (isMaps = false) => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;
    // Accedemos a la posicion actual
    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    const { latitude, longitude } = location.coords;

    setPickedLocation({ lat: latitude, lng: longitude });
    onLocation({ lat: latitude, lng: longitude });
    // if (isMaps) {
    //   navigation.navigate("Maps", { coords: { lat: latitude, lng: longitude } });
    // }
  };

  const onHandlerMapsLocation = async () => {
    await onHandleGetLocation(true);
  };

//   useEffect(() => {
//     if (mapLocation) {
//       setPickedLocation(mapLocation);
//       onLocation(mapLocation);
//     }
//   }, [mapLocation]);

  return (
    <View style={styles.container}>
        <View style={styles.preview}>
            {!pickedLocation ? (
                 <Text style={styles.text}>No hay ubicacion seleccionada</Text>
                ) : (
                <Text >{`latitud: ${pickedLocation.lat},  longitud: ${pickedLocation.lng}`}</Text>
                )
            }               
        </View>
      {/* <MapPreview location={pickedLocation} style={styles.preview}>
        <Text style={styles.text}>No hay ubicacion seleccionada</Text>
      </MapPreview> */}
      <Button title="Seleccionar ubicacion" onPress={onHandleGetLocation} color={colors.color1} />
      <Button
        title="Seleccionar desde mapa"
        onPress={onHandlerMapsLocation}
        color={colors.color2}
      /> 
    </View>
  );
};

export default LocationSelector;