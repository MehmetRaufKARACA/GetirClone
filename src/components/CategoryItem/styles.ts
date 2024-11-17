import { StyleSheet,Dimensions } from "react-native";

const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
    image:{
        width:width*0.18,
        height:width*0.18,
        borderRadius:5,
        
},
touchable:{
    width:width*0.25,
    height:width*0.24,
    alignItems: 'center',
    flexDirection:'column',
    justifyContent:'space-between',
    marginTop:10,
},
text:{
    fontSize:12,
    color:'616161',
    fontWeight:'500',
    marginRight:2,
},
})
export default styles;