import React from "react";
import { TouchableOpacity, Image, Text, Dimensions } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
type categoryItemProps = {
  item: Category;
};
function index({ item }: categoryItemProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryDetails",{category:item})}
      style={styles.touchable}
    >
      <Image style={styles.image} source={{ uri: item.src }} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
}
export default index;
