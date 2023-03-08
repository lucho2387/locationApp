import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: colors.color2,
    borderBottomWidth: 1,
    margin: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: colors.color1,
  },
  info: {
    marginLeft: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: colors.color1,
    marginBottom: 10,
  },
  address: {
    fontSize: 12,
    color: colors.color1,
    marginBottom: 10,
  },
});