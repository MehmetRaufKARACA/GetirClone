import { StyleSheet,Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    image:{
         width: width,
         height: height * 0.25, 
         resizeMode: "stretch"
    },
})

export default styles;