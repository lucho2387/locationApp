import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { ImageSelector, LocationSelector } from "../../components";
import { addPlace, savePlace } from "../../store/place.slice";

import colors from "../../utils/colors";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { useState } from "react";

const NewPlace = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [coords, setCoords] = useState(null);


  const onHandlerSubmit = () => {
    dispatch(savePlace(title, image, coords));
    navigation.goBack();
  };

  const onHandlerChange = (text) => {
    setTitle(text);
  };

  const onImage = (uri) => {
    setImage(uri);
    // console.warn(uri);
  };
  const onLocation = (location) => {
    setCoords(location);
    // console.warn(location)
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Direccion</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe la direccion del lugar"
          onChangeText={onHandlerChange}
          value={title}
        />
        <ImageSelector onImage={onImage} />
        <LocationSelector onLocation={onLocation} />
        <Button
          disabled={title.length === 0}
          color={colors.color1}
          title="Guardar"
          onPress={onHandlerSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
